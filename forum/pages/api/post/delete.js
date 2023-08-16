import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function handler(요청, 응답) {

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) });
    // 응답.status(200).redirect(302, '/list')

}

// 서버는 요청받으면 DB글 삭제
// deleteOne(); document 1개 삭제
// ListItem에서 body에 id 값 보냈기 때문에 요청.body까지만 씀(id안붙임 바보양ㅁ)
// connectDB,ObjectID import 까먹지 말기 !
//
