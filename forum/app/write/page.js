import React from 'react'

export default function Write() {
    return (
        <div className='p-20'>
            <h1>글작성</h1>
            <form action="/api/post/new" method="POST">
                {/* 서버/api/post/new로 보내짐 > 유저가 /api/post/new로 요청시 실행됨 */}
                <input type="text" name="title" placeholder="글 제목" />
                <input type="text" name="content" placeholder="글 내용" />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}
