import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const config = require('./config')

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: config.github.clientId,
            clientSecret: config.github.clientSecret,
        }),
    ],
    secret: config.jwt.secret
};
export default NextAuth(authOptions);

// providers에 로그인하고 싶은 방식 입력(array형식으로)
// 보안 필요한 코드 따로 빼서 관리하기