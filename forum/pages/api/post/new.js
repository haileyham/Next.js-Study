import { connectDB } from '@/util/database';
import React from 'react'

export default async function handler(요청, 응답) {
    if (요청.method === "POST") {
        if (요청.body.title == '') {
            return 응답.status(400).json('제목을 입력행!') // 400 Bad Request
        }
        try {
            const db = (await connectDB).db("forum");
            let result = await db.collection('post').insertOne(요청.body);
            return 응답.status(200).redirect(302, '/list')
        } catch (error) {
            return 응답.status(500).json('서버 에러가 발생했습니다.'); // 500 Internal Server Error
        }
    }
}

//------------------------------------------------------------//

// DB에 document 하나 발행 : insertOne()
// post 컬렉션에 document 하나 발행해서 insertOne(데이터)의 데이터를 넣어줌

//------------------------------------------------------------//

// redirect() : 응답과 동시에 페이지 이동 / 그냥 경로만 적으면 안되고, (302,'경로') 적어야함. 안그러면 무한로딩

//------------------------------------------------------------//

// input 값 빈칸 전송 이슈
//  if (요청.body.title == '') {
//     return 응답.status(400).json('제목을 입력행!')
// }

//------------------------------------------------------------//

// DB 에러 예외처리
// try,catch

