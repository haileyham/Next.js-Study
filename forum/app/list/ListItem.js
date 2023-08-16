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