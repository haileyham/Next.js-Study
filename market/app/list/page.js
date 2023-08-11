'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['Melon', 'Watermelon', 'Pineapple']
    let [수량, set수량] = useState([0, 0, 0])

    return (
        <div>
            <h1 className="title">List</h1>

            <span>{수량[0]}</span>
            <button onClick={() => {
                let copy = [...수량]; //기존에 있던것 복사
                copy[0]++ //복사본 플러스
                set수량(copy);

                //이렇게 하는 이유?
                // state 변경함수 사용시, 새로운state == 기존state 일 경우 변경 x(기존state랑 같으면 변경x)
                // 그래서 복사해서 사용
                // 근데 그냥 수량이 아니라 [...수량] 하는 이유는?
                // 그냥 let copy = 수량 했을 때는 copy == 수량 비교해보면 같다고 나오기 때문(이유는 array자료 주소값참조이기 때문)에 수정해도 같다고 나옴. 화살표 방향을 복사한것이기 때문
                // 그래서 [...수량] 이렇게 독립적인 array 만들어서 복사해줌
            }}>+</button>

            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt={a} className="food-img" />
                            <h4>{a} $40</h4>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                let copy = [...수량];
                                copy[i]++
                                set수량(copy); //위에서 copy[i]번째를 증가시키고 있고, 그것을 set수량에 새로 변경 / 출력되는건 위쪽의 span에서 수량[i]번째
                            }}>+</button>
                            <button onClick={() => {
                                let copy = [...수량];
                                copy[i]--
                                set수량(copy);
                            }}>-</button>
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

//똑같이 움직이기 때문에
//수량 state에 array로 집어넣기 [0,0,0]