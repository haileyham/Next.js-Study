import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../auth/[...nextauth]'
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    const db = (await connectDB).db('forum');
    let result = await db.collection('comment').deleteOne({ _id: new ObjectId(요청.query.id) })
    return 응답.status(200).json('삭제완료');
}
