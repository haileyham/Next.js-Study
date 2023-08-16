'use client'

import Link from 'next/link'
import React from 'react'

export default function ListItem({ result }) {


    return (
        <div className='hello'>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${result[i]._id}`}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>수정🖍</Link>
                            <span style={{ cursor: "pointer" }} onClick={(e) => {
                                fetch('/api/post/delete', {
                                    method: "DELETE",
                                    body: result[i]._id
                                }).then((result) => {
                                    result.json()
                                }).then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none'
                                    }, 1000)
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

// 애니메이션 주기
// 1. 애니메이션 동작 전, 동작 후의 CSS 스타일을 생각해보고
// 2. 애니메이션 동작 전 스타일 넣어주고
// 3. transition 스타일도 넣어주고
// 4. 원하는 시점에 애니메이션 동작 후 스타일을 넣기

// opacity 주면서 안보이도록 해주기
// onClick에 e
// 성공적 서버 통신후 .then에 e.target (유저가 방금 클릭한 html요소)
// e.target.parentElement.style.opacity (유저가 클릭한 html요소의 부모요소 style)

// 공간 그대로 차지하니까, div 박스도 없애주기
// setTimeout(() => {
//     e.target.parentElement.style.display = 'none'
// }, 1000)
// 1초후에 박스 없애주도록