import { connectDB } from '@/util/database';
import React from 'react'

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();

    // 글발행 요청
    if (요청.method === "POST") {
        return 응답.status(200).json(요청.body); //input(name="title") 입력한 것 출력
    }

    //DB에 있던 글들 모두 요청
    // else if (요청.method === "GET") {
    //     console.log(123);
    //     return 응답.status(200).json(result)
    // } 

    // 현재 날짜, 현재 시간 요청
    // else if (요청.method === "GET") {
    //     const date = new Date();
    //     return 응답.status(200).json(date)
    // }

    // 글발행 가져오기
    else if (요청.method === "GET") {
        return 응답.status(200).json(result)
    }
}