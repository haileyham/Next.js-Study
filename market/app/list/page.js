'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['Melon', 'Watermelon', 'Pineapple']
    let [수량, set수량] = useState(0)

    return (
        <div>
            <h1 className="title">List</h1>
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt={a} className="food-img" />
                            <h4>{a} $40</h4>
                            <span> {수량} </span>
                            <button onClick={() => { set수량(수량 + 1) }}>+</button>
                            <button onClick={() => { set수량(수량 - 1) }}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

//좋아요 버튼 만들기
//그냥 <button onClick={() => { console.log(1) }}>+</button> 하면 안됨
//JS문법은 Server component에서 안되고, client component에서만 되기 때문에 위에 'use client' 붙이기
//이벤트핸들러 중에서 click 이벤트 사용 / onMouseOver 등 다양한 이벤트 종류 있음

//state에 데이터 보관 useState
//set수량 : set수량() 함수처럼. ()안에 넣은것으로 기존 state 변경됨
//좋아요 숫자 클릭하면 +1 하도록
//set수량(수량 + 1) // 수량++ 할경우 버튼 두번씩 눌러줘야함
//근데 위에처럼 원본에 +1하지말고, ...복사본 만들어서 사용