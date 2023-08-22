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
    return 응답.status(200).json('좋아요완료')
}
