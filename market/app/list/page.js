export default function List() {
    return (
        <div>
            <h1 className="title">List</h1>
            <div className="food">
                <h4>Melon $40</h4>
            </div>
            <div className="food">
                <h4>Watermelon $40</h4>
            </div>
        </div>
    )
}
// Next.js에서는 URL과 페이지 만들고 싶으면
// 1. app폴더안에 폴더만들고
// 2. 그 안에 page.js 넣고
// 3. 그 안에 레이아웃 넣기
// 4. 그러면 폴더명으로 URL 자동생성됨
// + list/melon 하고싶으면 app/list/melon 폴더생성

// page.js 만드는법
// - component를 넣으면 됨
// 1. function작명(){}
// 2. return(JSX~)
// 3. export default
// > 사실 그냥 rfc 엔터치면 기본셋팅됨