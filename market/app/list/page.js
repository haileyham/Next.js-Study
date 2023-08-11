// export default function List() {
//     let 상품 = ['Melon', 'Watermelon', 'Pineapple']

//     return (
//         <div>
//             <h1 className="title">List</h1>
//             <div className="food">
//                 <h4>{상품[0]} $40</h4>
//             </div>
//             <div className="food">
//                 <h4>{상품[1]} $40</h4>
//             </div>
//             <div className="food">
//                 <h4>{상품[2]} $40</h4>
//             </div>
//         </div>
//     )
// }

//------------------------------------------------------------//

// jsx에서는 for반복문, if문 쓸 수 없음
// map()사용
// map((a,i)=>{return 10})
// 첫번째파라미터 a : array 안의 자료 출력
// 두번째파라미터 i : 반복될 때마다 0부터 1씩 커지는 정수
// return에 적은 것을 array로 담아줌 : 위에서는 3번 반복되기 때문에 10이 3번 출력[10,10,10]

//------------------------------------------------------------//

export default function List() {
    let 상품 = ['Melon', 'Watermelon', 'Pineapple']

    return (
        <div>
            <h1 className="title">List</h1>
            {
                상품.map((a) => {
                    return (
                        <div className="food">
                            <h4>{a} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}