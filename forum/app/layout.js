import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { LoginBtn, LogoutBtn } from './LoginoutBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { cookies } from 'next/headers'
import DarkMode from './Darkmode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default async function RootLayout({ children }) {
  // 로그인된 유저정보 출력
  // 현재 로그인된 유저이름, 이메일 등이 남음
  let session = await getServerSession(authOptions); //서버 컴포넌트, 서버기능 안에서 사용가능 / getServerSession(), authOptions 두개 import 하고 async,await 붙이기
  // console.log(session); // server component이기때문에 터미널에서 확인 가능

  let cookie = cookies().get('mode') //cookie에서 mode랑 값 가져오기
  // console.log(cookie)

  return (
    <html lang="en">
      <body className={
        cookie != undefined && cookie.value == 'dark' //쿠키 이조건충족하면,
          ? 'dark-mode' //클래스 다크모드 붙임
          : ''//아니면 클래스 안붙임
      }>
        <div className="navbar">
          <Link href="/" className="logo">HaileyForum</Link>
          <Link href="/list" className='navMenu'>List</Link>
          <Link href="/write" className='navMenu'>Write</Link>
          {/* button에 onClick 못하기 때문에 client component로 버튼 만들고 import해와서 쓰기 / 로그인 연결 라이브러리 함께있기때문에 signIn()하면됨 */}
          {/* <LoginBtn /> */}
          {/* 로그인 유저정보 있을 경우 유저이름&로그아웃버튼 / 유저정보 없을 경우 로그인버튼 */}
          {/* cookie 값 보내주기 { name: 'mode', value: 'light' }로 나옴*/}
          <div className='darkLogin'>
            <DarkMode cookie={cookie.value} />
            {
              session ? <span className="userLogin" >
                <img src={session.user.image} alt={session.user.name} className="loginImg" />
                <Link href={`/profile/연결예정`}>{session.user.name}</Link>
                <LogoutBtn />
              </span>
                : <LoginBtn />
            }
          </div>
        </div>
        {children}</body>
    </html >
  )
}
