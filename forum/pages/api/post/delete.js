import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
    if (요청.method == "DELETE") {
        let session = await getServerSession(요청, 응답, authOptions)
        const db = (await connectDB).db("forum");
        let 찾자 = await db.collection("post").findOne({ _id: new ObjectId(요청.body) })

        if (session) {
            if (찾자.author === session.user.email) {
                let result = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) });
                return 응답.status(200).json('삭제완료') //삭제완료 문구를 보내고있음
            } else {
                return 응답.status(500).json('현재유저와 작성자 불일치')
            }
        } else {
            return 응답.status(401).json('로그인 필요');
        }
    }
}

// 서버는 요청받으면 DB글 삭제
// deleteOne(); document 1개 삭제
// ListItem에서 body에 id 값 보냈기 때문에 요청.body까지만 씀(id안붙임 바보양ㅁ)
// connectDB,ObjectID import 까먹지 말기 !

// 삭제후 새로고침

// alert() 웹 브라우저 함수라 서버사이드에서는 작동x
