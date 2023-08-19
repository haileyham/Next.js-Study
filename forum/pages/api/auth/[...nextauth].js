import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';


const config = require('./config')

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: config.github.clientId,
            clientSecret: config.github.clientSecret,
        }),

        CredentialsProvider({
            //1. 로그인페이지 폼 자동생성해주는 코드 
            name: "credentials",
            credentials: {
                //로그인 페이지에 들어갈 input들
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },

            //2. 로그인요청시 실행되는코드 ★★
            //직접 DB에서 아이디,비번 비교하고 
            //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
            async authorize(credentials) {
                let db = (await connectDB).db('forum');
                let user = await db.collection('user_cred').findOne({ email: credentials.email }); //이메일 찾기
                if (!user) {
                    console.log('해당 이메일은 없음');
                    return null
                }
                const pwcheck = await bcrypt.compare(credentials.password, user.password);//DB 비번, 유저 제출한 비번 비교
                if (!pwcheck) {
                    console.log('비번틀림');
                    return null
                }
                return user
            }
        })
    ],

    //3. jwt 써놔야 잘됨 + jwt 만료일설정
    session: {
        strategy: 'jwt', //세션 or jwt 쓸 지 결정하는 부분인데 jwt 사용해야 잘됨
        maxAge: 30 * 24 * 60 * 60 //30일 / 로그인 유지기간 / 하루만 하고 싶으면 24 * 60 * 60
    },


    callbacks: {
        //4. jwt 만들 때 실행되는 코드 
        //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어감
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = {};
                token.user.name = user.name //유저 정보 보낼 수 있음, 추가 가능 / (모든 글 수정/삭제 가능한)관리자 로그인 필요할 때 role 부여해서 admin,normal로 나눠서 role-based auth / 
                token.user.email = user.email
            }
            return token;
        },
        //5. 유저 세션이 조회될 때 마다 실행되는 코드
        session: async ({ session, token }) => {
            session.user = token.user; //컴포넌트 안에서 보여줄 유저정보 / 토큰에 있던 모든 데이터들을 보내는 것
            return session;
        },
    },

    secret: config.jwt.secret,
    adapter: MongoDBAdapter(connectDB) //다른 DB사용하려면 다른 DB adapter찾아서 사용가능
};
export default NextAuth(authOptions);

// providers에 로그인하고 싶은 방식 입력(array형식으로)
// 보안 필요한 코드 따로 빼서 관리하기