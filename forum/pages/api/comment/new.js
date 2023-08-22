import { connectDB } from '@/util/database'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../auth/[...nextauth]'
import { ObjectId } from 'mongodb'

// export default async function handler(요청, 응답) {
//     if (요청.method == "POST") {
//         let 저장내용 = {
//             content: '댓글내용',
//             parent: '부모게시물_id',
//             author: '유저이메일'
//         }
//     }
//     console.log(요청.body)
//     const db = (await connectDB).db("forum");
//     let result = await db.collection('comment').insertOne(저장내용);
//     return 응답.status(200).json('저장완료')
// }

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    // console.log(요청.body)

    if (session) {
        if (요청.method == "POST") {
            if (요청.body.comment == '') {
                return 응답.status(400).json('댓글을 입력하세용!') // 400 Bad Request
            }
            let 저장내용 = {
                content: 요청.body.comment, //댓글 내용
                parent: new ObjectId(요청.body._id), //해당글id
                author: session.user.email //댓글 작성자 / 나중에 회원 ObjectId 넣기
            }
            // console.log(요청.body)
            const db = (await connectDB).db("forum");
            let result = await db.collection('comment').insertOne(저장내용);//comment에 따로 저장(댓글내용,해당글id,댓글작성자)
            return 응답.status(200).json('저장완료')
        }
    } else {
        return 응답.status(401).json({ error: '로그인 필요' });
    }
}
