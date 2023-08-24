import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    // 1. 유저가 GET, POST (or페이지접속)요청시
    // 2. 여기 먼저 실행되고
    // 3. 그 다음 서버코드 실행
    // console.log(request.nextUrl)  //유저가 요청중인 URL 출력해줌
    // console.log(request.cookies)  //유저가 보낸 쿠키 출력해줌
    // console.log(request.headers)  //유저의 headers 정보 출력해줌 
    // NextResponse.next()  //통과
    // NextResponse.redirect()  //다른페이지 이동
    // NextResponse.rewrite()  //다른페이지 이동

    const session = await getToken({ req: request }) //현재 로그아웃 상태이면 null 출력
    // console.log(session)

    // write페이지에서 if문써서 이동시켜도 됨(그렇게 해왔었음)
    // 그렇지만 막고 싶은 페이지가 여러개라면 이렇게 코드짜놓고 한번에 처리 가능해서 유용
    if (request.nextUrl.pathname.startsWith('/write')) {
        if (session == null) {//로그인 안된상태로 write페이지 접속시 로그인 페이지로 이동
            return NextResponse.redirect('http://localhost:3000/api/auth/signin', request.url)
        }
    }

    // if (request.nextUrl.pathname === '/list') { //현재 요청중인url
    if (request.nextUrl.pathname.startsWith('/list')) { // list하위페이지들도 적용해줌(/list로 시작하는것 모두 적용)
        console.log(request.headers.get('sec-ch-ua-platform')) //현재접속중OS
        console.log(new Date()) //지금날짜및시간
        return NextResponse.next() //middleware에서 마지막은 NextResponse 꼭 이거 있어야함 / 별일없으니 넘어가자
    }


    //쿠키
    //darkmode 이걸로 가능함
    // request.cookies.get('쿠키이름')  //출력
    // request.cookies.has('쿠키이름')  //존재확인
    // request.cookies.delete('쿠키이름')  //삭제

    // const response = NextResponse.next()
    // response.cookies.set({
    //     name: 'mode',
    //     value: 'dark',
    //     maxAge: 3600,
    //     httpOnly: true //유저가 자바스크립트로 브라우저 쿠키조작하는것 방지(개발자도구에서 직접 변경하는것 막지 못함)
    // })
    // return response  //쿠키생성


    // /register 페이지 방문시 visited=true 쿠키 생성
    if (request.nextUrl.pathname.startsWith('/register')) {
        if (request.cookies.has('visited') == false) {
            const response = NextResponse.next();
            response.cookies.set({
                name: 'visited',
                value: 'true',
                maxAge: 3600,
            })
            return response
        }
        return NextResponse.next()
    }
} 