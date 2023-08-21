'use client'

// import react, { useState } from 'react'

// export default function Comment() {
//     let [comment, setComment] = useState('');

//     return (
//         <div>
//             <div>댓글목록</div>
//             {/* onChange는 <input>에 유저가 입력할 때마다 실행됨  */}
//             {/* e.target.value는 유저가 input에 입력한 값이 남음 */}
//             <input onChange={(e) => { setComment(e.target.value) }} />
//             {/* 서버로 댓글내용 전송 */}
//             <button onClick={() => {
//                 // console.log(comment)
//                 fetch('/api/post/comment', { method: 'POST', body: comment })
//             }}>댓글전송</button>
//         </div>
//     )
// }

// 유저가 <input>에 입력한 값 다루기
// 리액트에선 보통 유저가 입력한 값을 state에 저장해두고 사용

import React, { useState } from 'react';

export default function Comment({ _id }) {
    const [comment, setComment] = useState('');
    // console.log(comment);
    // console.log(_id);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/comment/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: comment, _id: _id }),
                //예시 {"comment":"ㅁ","_id":"64d9c0a9dce5a38bc6e45cc7"}
            });

            if (response.ok) {
                // 성공적으로 처리된 경우에 대한 로직 추가
            } else {
                // 에러 처리 로직 추가
                const errorResponseData = await response.json();
                console.error('Error response:', errorResponseData);
            }
        } catch (error) {
            console.error('Error sending comment:', error);
        }
    };

    return (
        <div>
            <div>댓글목록</div>
            <input onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleSubmit}>댓글전송</button>
        </div>
    );
}