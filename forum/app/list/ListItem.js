'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

export default function ListItem(props) {


    return (
        <div>
            {
                props.result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${props.result[i]._id}`}>
                                <h4>{props.result[i].title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>수정🖍</Link>
                            <span onClick={() => {
                                fetch('/api/test').then(() => { console.log(123) })
                            }}> 삭제🗑</span>
                            <p>{props.result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

// client component에서 DB 데이터 가져오려면
//[1]
// 부모 list page.js에서 props로 보내줘도 되지만 크고 복잡해지는 프젝일수록 useEffect가 남
// client component에서는 DB 직접 조작하는 코드 넣지 못함. user browser로 전달되기 때문에.
// 서버에 부탁해서 DB 게시물 가져오기 > result = DB게시물
// 단점 : 검색노출 어려움
// useEffect 실행시점은 HTML부터 유저에게 보여주고 그 다음에 실행됨
// 일반 유저는 상관 없을 수 있지만, 검색엔진봇에는 텅빈것으로 보일수있음
//[2]
// 검색노출 위해서는 부모컴포넌트인 list에서 DB listitem으로 props로 보내줘서 해주기
// result~라고 되어있던 것들 props.result~로 변경
// 편하게 쓰려면 ({result}) 그대로 사용해서 props 안 붙이고 그냥 result 사용가능 (destructuring 문법)

// 삭제
// 버튼 누르면 서버로 삭제 요청
// 서버는 요청받으면 DB에서 삭제
// [1] form 태그 이용하면 서버로 get,post 요청 가능(span감싸서 사용가능)
// [2] Ajax 사용 -client component에서만 사용가능 -fetch사용
// Ajax 장점 : <form> 요청시 항상 새로고침되는데(next.js에선 간혹 아닐수도), Ajax는 새로고침 없이 가능

// GET 요청
// - fetch(주소) 입력하면 GET 요청 날려줌
// - 요청완료시 코드실행은 .then() 붙여서 사용
// ```
{/* <span onClick={() => {
    fetch('/api/test').then(() => { console.log(123) })
}}> 삭제🗑</span> */}
// ```

// POST 요청
// POST 요청은 fetch('/URL', {method:'POST', body:'데이터'}) -method에 GET,DELETE,PUT가넝
// 문자, 숫자 데이터들을 서버로 보내줌
// 데이터에 array, object 보내고싶으면 JSON.stringify([1,2,3]) 담아서 보내기
