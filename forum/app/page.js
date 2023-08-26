import { connectDB } from '@/util/database';
import React from 'react'
import Link from 'next/link'

export default async function Home() {

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();
    // console.log(result);
    const imageURL = '/finjake.jpg'

    return (
        <div>
            <main>
                <div className="image-container">
                    <img src={imageURL} alt="finjake" className="bg" />
                    <div className="overlay">
                        <h1>Hello user</h1>
                        <p>This is the best chance!</p>
                        <Link href="/register">
                            <button>Enjoy us!</button>
                        </Link>
                    </div>
                </div>
            </main>
            <div className="explain-box">
                <h4>blahblah</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa fugit ratione blanditiis recusandae
                    ut temporibus quam id, eum quod consectetur obcaecati aperiam? Suscipit aspernatur ducimus dolores voluptas at
                    expedita!</p>
            </div>
        </div>
    )
}

// ------------------------------------------------------------//

// 처음 보는 세부기능 만들기 :
// 1. 어떤 식으로 동작하는지 상세하게 한글로 설명
// 2. 코드로 짜기

// ------------------------------------------------------------//

// 글 목록 페이지 / 기능
// 1. HTML 페이지 필요
// 2. 페이지 방문할 때 DB에서 글 꺼내오기
// 3. 글들 HTML 집어넣기

// 이렇게 해놔야 검색할 때도 편함
// 단순히 '게시판 어떻게 만들어요?'가 아닌
// 'MongoDB에서 글 꺼내는 법' 이렇게 검색 가능

// ------------------------------------------------------------//

// 1. 글 목록 보여줄 HTML 페이지 : App/list/page.js

// 2. 페이지 방문할 때 DB에서 글 꺼내오기
// - 글 내용이 별로 없기 때문에 DB에다가 2번째 글 추가하고 오기(document)
// ```
// const db = (await connectDB).db("forum");
// let result = await db.collection('post').find().toArray();
// ```

// 3. HTML 집어넣기 : map으로 넣기