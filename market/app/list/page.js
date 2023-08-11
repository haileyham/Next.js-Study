//------------------------------------------------------------//
// 그냥 img 태그 사용
//------------------------------------------------------------//

export default function List() {
    let 상품 = ['Melon', 'Watermelon', 'Pineapple']

    return (
        <div>
            <h1 className="title">List</h1>
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt={a} className="food-img" />
                            {/* img public 폴더에 넣었으면, /부터 시작해서 이미지경로 넣으면 됨.  (public 폴더에 있는 것들은 사이트 발행시 자동으로 사이트 root 경로로 이동)*/}
                            {/* 최적화된 이미지 넣기 : 사이즈 최적화 / layout shift 방지 / lazy loading */}
                            {/* 각각 번호별로 이미지 보여주기 위해서 food0~food2 이미지 src="/food0.png" 하드코딩 말고 src={`/food${i}.png`}하기 */}
                            <h4>{a} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

//------------------------------------------------------------//
//------------------------------------------------------------//


// import Image from "next/image"
// import 이미지1 from '/public/food0.png' // 혹은 @/public/food0.png
//------------------------------------------------------------//
// 최적화된 이미지 넣기
// 1. import Image from 'next/image'
// 2. <Image/> 사용
// 3. 이미지 경로는 해당 이미지 import 해와서 사용해야 함

// 성능과 속도 측면에서 향상 됨
// 이미지 import 해서 사용하면
// 자동으로 이미지 lazy loading & 사이즈 최적화 & layout shift 방지
// layout shift는 이미지가 늦게 로딩될 때 밑에 요소가 올라오는 현상

// 단점
// 만일 외부이미지를 가져올 때는 src="주소" 넣은 다음에 width={300} height={300} 속성 반드시 필요함
// + next.config.js 파일에 images 넣을 거라고 셋팅 필요함(귀찮음 ㅠ 그래서 최적화는 바로 진행 못하면 사이트 다 만들고 리팩할때하기)
//------------------------------------------------------------//

// export default function List() {
//     let 상품 = ['Melon', 'Watermelon', 'Pineapple']

//     return (
//         <div>
//             <h1 className="title">List</h1>
//             {
//                 상품.map((a, i) => {
//                     return (
//                         <div className="food" key={i}>
//                             <Image src={이미지1} className="food-img" />
//                             <h4>{a} $40</h4>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }