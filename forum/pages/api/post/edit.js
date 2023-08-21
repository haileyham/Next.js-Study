import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(요청, 응답) {
    if (요청.method === "POST") {
        let session = await getServerSession(요청, 응답, authOptions)
        const db = (await connectDB).db("forum");
        // console.log(요청.body)
        let 찾자 = await db.collection("post").findOne({ _id: new ObjectId(요청.body._id) })
        console.log(찾자)

        if (요청.body.title == '') {
            return 응답.status(400).json('제목을 입력행!') // 400 Bad Request
        }

        if (session) {
            if (찾자.author === session.user.email) {
                let 수정 = { title: 요청.body.title, content: 요청.body.content }
                const db = (await connectDB).db("forum");
                let result =
                    await db.collection('post').updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 수정 })
                return 응답.status(200).redirect(302, '/list')
            } else {
                return 응답.status(500).json('글 작성자와 수정자 불일치'); // 500 Internal Server Error
            }
        } else {
            return 응답.status(401).json({ error: '로그인 필요' });
        }
    }
}

// console.log(요청.body) // {
//     title: 'helloㄴㄴ',
//     content: 'hello worldㄴㄴ',
//     _id: '64d9a316dce5a38bc6e45cc5'
//   }

// 수정 PUT 사용해야하는데 간단한것은 일단 POST로 처리하기
// 수정 : updateOne({수정할게시물정보},{$set:{수정내용}});
// 수정할게시물정보는 id값으로 가져와야하는데, edit페이지에서 input창(display:none)해놓고, body._id 담아서 보내고
// 수정내용은 $set:요청.body 할경우에는 id,content,title 세개의 값이 들어가있기때문에, title과 content값만 넣어야하므로 수정변수를 만들어서 title,content 새로 담은 후에 넣어주기