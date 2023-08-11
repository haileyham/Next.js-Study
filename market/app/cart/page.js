// import 가져와보깅 from './data.js'

// export default function Cart() {
//     let 장바구니 = ['melon', 'watermelon']
//     return (
//         <div>
//             <CartItem 작명="전할데이터" />
//             <CartItem 작명={장바구니} />
//         </div>
//     )
// }

// function CartItem(props) {
//     return (
//         <div className="cart-item">
//             <p>상품명 {가져와보깅} {props.작명}</p>
//             <p>$40</p>
//             <p>1개</p>
//         </div>
//     )
// }

//------------------------------------------------------------//

// props 문법
// 1. <자식 component 작명="전할데이터"/>
// 위에서는 Cart컴포넌트안의 <CartItm 작명="전할데이터"/>

// 2. 자식은 props.작명 사용
// 위에서는 CartItem 컴포넌트에 props 받으면서 <p>상품명 {가져와보깅} {props.작명}</p>
// 그러면 부모가 보낸 데이터가 남음 / 전할데이터가 남음

// - 중괄호 열어서 변수, 함수 등 아무거나 전송가능
// 위에서는 <CartItem 작명={장바구니} /> 장바구니에     let 장바구니 = ['melon', 'watermelon'] 담아서 보냄

// 비슷한 컴포넌트 사용할 때 props 이용

//------------------------------------------------------------//

export default function Cart() {
    let 장바구니 = ['melon', 'watermelon']
    return (
        <div>
            <CartItem item={장바구니[0]} />
            <CartItem item={장바구니[1]} />
            <Banner content="헤일리카드" />
            <Banner content="햄햄카드" />
            <Btn color="blue" />
        </div>
    )
}

function Banner(props) {
    return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props) {
    return (
        // let 장바구니 = ['melon', 'watermelon']
        // 그냥 여기에 추가하면 안되는지 ? > 그러면 여러번 div여러개일때 여러번 부르게 됨
        // 그치만 next.js에서는 같은 데이터 요청이 여러개면 1개로 압축해줌(deduplication가능)
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Btn(props) {
    return <button style={{ background: props.color }}>button</button>
}
