import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../auth/[...nextauth]'
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(요청, 응답) {
    if (요청.method == "DELETE") {
        let session = await getServerSession(요청, 응답, authOptions);
        const db = (await connectDB).db('forum');
        // console.log(요청.query.author)
        // console.log(요청.query.id)
        let 찾자 = await db.collection('comment').findOne({ _id: new ObjectId(요청.query.id) }) //작성자 찾기위해서 해당 댓글을 미리 찾고!!! (헷갈리지말기, 댓글자체id로 찾고 있기 때문에 id 집어넣어서 일단 해당댓글 정보가져와서 밑에 if문에서 찾자.author로 비교하기)
        // console.log(찾자)

        if (session) {//로그인 유무 체크
            if (찾자.author === session.user.email) {//댓글 작성자랑 삭제요청유저 같으면 삭제하도록
                let result = await db.collection('comment').deleteOne({ _id: new ObjectId(요청.query.id) })//댓글 id 받음
                return 응답.status(200).json('삭제완료');
            } else {
                return 응답.status(500).json('현재유저와 댓글 작성자 불일치')
            }
        }
    }
}
