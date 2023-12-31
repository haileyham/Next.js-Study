import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import React from 'react'
import PreImg from './PreImg'

export default async function Write() {
    let session = await getServerSession(authOptions)
    // console.log(session)

    // 로그인 했을 때만 write 페이지 접속 가능하도록
    if (session == null) {
        return <div>로그인하세용</div>
    } else {
        return (
            <div className='p-20'>
                <h1>글작성</h1>
                <form action="/api/post/new" method="POST">
                    {/* 서버/api/post/new로 보내짐 > 유저가 /api/post/new로 요청시 실행됨 */}
                    <textarea type="text" name="title" placeholder="글 제목" className="writeTitle" />
                    <textarea type="text" name="content" placeholder="글 내용" className="writeContent" />
                    <PreImg />
                    <button type="submit">등록</button>
                </form>
            </div>
        )
    }
}
