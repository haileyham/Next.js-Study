'use client'

import react, { useState } from 'react'

export default function Comment() {
    let [comment, setComment] = useState('');

    return (
        <div>
            <div>댓글목록</div>
            {/* onChange는 <input>에 유저가 입력할 때마다 실행됨  */}
            {/* e.target.value는 유저가 input에 입력한 값이 남음 */}
            <input onChange={(e) => { setComment(e.target.value) }} />
            {/* 서버로 댓글내용 전송 */}
            <button onClick={() => {
                // console.log(comment) 
                fetch('/URL', { method: 'POST', body: comment })
            }}>댓글전송</button>
        </div>
    )
}

// 유저가 <input>에 입력한 값 다루기
// 리액트에선 보통 유저가 입력한 값을 state에 저장해두고 사용