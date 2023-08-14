import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb'
import React from 'react'

// export default async function Home() {

//     //mongodb 연결
//     const client = await connectDB; // util/databse.js에 따로 빼둔 것 import 해오기
//     const db = client.db("forum"); //database name 연결
//     let result = await db.collection('post').find().toArray(); // collection name // 실행하면 mongodb 데이터 출력 / post 컬렉션의 모든 document 꺼내와서 array로 만들어 출력
//     console.log(result); // 터미널에 나옴

//     return (
//         <div>안녕

//         </div>
//     )
// }

//------------------------------------------------------------//

// DB 입출력 코드는 server component 안에서만 사용하기
// 민감한 자료들 있기 때문에 client component에서는 하지말도록!

//------------------------------------------------------------//

// 조금더 축약한 코드 사용하고 싶다면

//------------------------------------------------------------//



export default async function Home() {

    const db = (await connectDB).db("forum"); //이렇게 써도 되고, await 붙는 것도 축약하고 싶으면 export 단계에서 넣어주면 됨(topLevelAwait:true). 근데 복잡,버전문제 있어서 지금은 그냥 이렇게 쓰기.
    let result = await db.collection('post').find().toArray();
    console.log(result);

    return (
        <div>안녕

        </div>
    )
}