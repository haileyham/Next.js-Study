'use client'

import Link from 'next/link'
import React from 'react'

export default function ListItem({ result }) {


    return (
        <div>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${result[i]._id}`}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>수정🖍</Link>
                            <span style={{ cursor: "pointer" }} onClick={() => {
                                fetch('/api/post/delete', {
                                    method: "DELETE",
                                    body: result[i]._id
                                }).then((r) => {
                                    if (r.status == 200) {
                                        return r.json()
                                    } else {
                                        //서버가 에러코드전송시 실행할코드
                                    }
                                }).then((result) => {
                                    //성공시 실행할코드
                                    console.log(result) //delete.js에서 보낸 json 삭제완료문구뜸
                                }).catch((error) => {
                                    //인터넷문제 등으로 실패시 실행할코드
                                    console.log(error)
                                })
                            }}> 삭제🗑</span>
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

//(참고) DELETE 요청시 데이터안가면 POST 로 바꿔서 하기
// fetch통해서 DELETE, body에는 props로 받은 DB의 id값 넘겨주고 있음

// [1] Ajax 요청 완료시 코드실행은 fetch().then(()=>{})
// [2] Ajax 요청 완료시 서버가 보낸 데이터 출력
// [3] Ajax 에러처리 