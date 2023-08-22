import { connectDB } from '@/util/database'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(요청, 응답) {
    const session = await getServerSession(요청, 응답, authOptions);
    // console.log(session.user.email)
    // console.log(요청.query.commentId)
    let 좋아요저장 = {
        likePerson: session.user.email,//좋아요 누른 유저 email
        likeComment: new ObjectId(요청.query.commentId) //좋아요 누른 댓글 id
    }
    const db = (await connectDB).db('forum');
    const result = await db.collection('like').insertOne(좋아요저장);
    const 좋아요갯수 = await db.collection('like').find({ likeComment: new ObjectId(요청.query.commentId) }).count(); // 좋아요 누른 해당 댓글의 id를 likeComment에 저장했기 때문에, likeComment 중에서 해당댓글id를 가지고 오고, count()로 갯수세기 / 이렇게 하면 누른갯수 가져올수 있음 
    // console.log(좋아요갯수)
    return 응답.status(200).json(좋아요갯수)//좋아요 갯수 보내주기
}
