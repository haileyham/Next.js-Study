import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import React from 'react'

export default async function handler(요청, 응답) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('comment').find({ parent: new ObjectId(요청.query.id) }).toArray() //모든 document 찾아서 가져오도록 / 그치만 모든 것을 가져오면 안되니까 find안에 parent확인해서 id값 일치하는 것만 가져오도록
    //query string으로 데이터 보냈기 때문에 (요청.query.id) 로 출력 -보낼때 id란 이름으로
    return 응답.status(200).json(result)
}
