import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Github에서 발급받은ID',
            clientSecret: 'Github에서 발급받은Secret',
        }),
        GithubProvider({
            clientId: 'Github에서 발급받은ID',
            clientSecret: 'Github에서 발급받은Secret',
        }),
    ],
    secret: 'jwt생성시쓰는암호'
};
export default NextAuth(authOptions);

// providers에 로그인하고 싶은 방식 입력(array형식으로)
// 보안 필요한 코드 따로 빼서 관리하기