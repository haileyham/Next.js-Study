//------------------------------------------------------------//

// export default function Cart() {
//     return (
//         <div>
//             <h4 className="title">Cart</h4>
//             <div className="cart-item">
//                 <p>상품명</p>
//                 <p>$40</p>
//                 <p>1개</p>
//             </div>
//             <div className="cart-item">
//                 <p>상품명</p>
//                 <p>$40</p>
//                 <p>1개</p>
//             </div>
//         </div>
//     )
// }

//------------------------------------------------------------//

// component 만드는 법
// 1. function 작명() { }
// 2. return (축약하고 싶은 것 넣기)
// 3. 작명한 것 html 안에 넣기

// 재사용할 코드 컴포넌트 만들기
// page.js 크게 만들 때

//------------------------------------------------------------//

import 가져와보깅 from './data.js'
// 하나 import 해올 때는 위에처럼 작명 마음대로 가능(근데 헷갈리지 않게 변수,함수명 그대로 쓰는 경향)
// 여러개 import 해올 때는 {age,다른것} 이런식으로 export한 변수,함수명 그대로 사용

export default function Cart() {
    return (
        <div>
            <CartItem />
        </div>
    )
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명 {가져와보깅}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

//------------------------------------------------------------//

// Next.js에서 컴포넌트는 2종류 (client, server)
// 아무곳에나 만드는 것은 server component
// 파일 맨 위에 'use client'넣고 만든건 client component(밑에있는건 전부 client component됨)

//------------------------------------------------------------//

// sever component
// - html에 자바스크립트 기능 넣기 불가능
// - useState, useEffect등 사용불가
// - 로딩속도 빠름
// - 검색엔진 노출 유리

//------------------------------------------------------------//

// client component는 가능
// - onClick={()=>{}} 가넝
// - useState, useEffect등 가넝
// - 로딩속도 느림1(자바스크립트 많이 필요)
// - 로딩속도 느림2(hydration 필요)
// hydration : html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일

//------------------------------------------------------------//

// 추천
// 큰 페이지는 sever component
// 페이지 내에서 JS 기능 필요한 곳만 client component 

