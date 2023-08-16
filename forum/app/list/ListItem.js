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
                                // fetch('/api/post/delete', {
                                //     method: "DELETE",
                                //     body: result[i]._id
                                // }).then((result) => {
                                //     result.json()
                                // }).then(() => {
                                //     e.target.parentElement.style.opacity = 0;
                                //     setTimeout(() => {
                                //         e.target.parentElement.style.display = 'none'
                                //     }, 1000)
                                // })

                                fetch('/api/abc/블라블라')
                            }}> 삭제🗑</span>
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

// [서버로 데이터 보내는 법]
// [1] fetch는 body에 넣기

// [2] <form>은 input에 넣기

// [3] URL 뒤에 ?데이터이름=값 입력가능 (query string)
// - fetch('/api/test?데이터이름=값') 이런식으로 두면 터미널에{ '데이터이름': '값' } 찍힘
// - fetch('/api/test?데이터이름=값&age=100') &기호 사용해서 데이터 추가 가능 { '데이터이름': '값', age: '100' }
// (참고)서버에서는 요청.query로 출력
// ```
// export default async function handler(요청, 응답) {
//     console.log(요청.query)
//     return 응답.status(200).json()
// }
// ```
// - (장점) 간단함 / GET 요청도 데이터 전송가능(원래는 GET 요청 body 없어서 데이터 전송x)
// - (단점) 데이터가 많으면 더러워지고, URL에 데이터 노출됨

// [4] URL parameter 문법
// pages / api / abc / [id].js
// 참고로 []안에 한글 넣으면 제대로 동작 못하고 500 에러 뜸.. 꼭 영어로 ^ㅡ^; -어제에러뜬건데 또 실수하네ㅠㅠ
// - 유저가 /api/abc/아무문자 요청하면 위에것 실행해줌
// -fetch('/api/abc/블라블라') 이렇게 입력하면 서버로 '블라블라'가 전송됨. 데이터 입력하는 위치.
// 서버에서는 해당 데이터 요청.query로 출력 { id: '블라블라' } 이렇게 들어옴
// 1. URL parameter 만들고(pages/api/abc/[id].js)
// 2. URL parameter 자리에 데이터 입력(fetch('/api/abc/블라블라'))

// 정리
// 1. DB document 삭제 deleteOne
// 2. 서버랑 Ajax 통신 가능
// 3. 서버로 데이터 전송시 다른방법 query string / URLparameter 가능



