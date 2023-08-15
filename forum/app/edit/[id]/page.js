import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function Edit(props) {
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    await db.collection('post').updateOne({ _id: new ObjectId(props.params.id) }, { $set: { title: result.title, content: result.content } })

    return (
        <div className='p-20'>
            <h1>글 수정</h1>
            <form action="/api/put/edit" method="POST">
                <input type="text" name="title" placeholder="글 제목" defaultValue={result.title} />
                <input type="text" name="content" placeholder="글 내용" defaultValue={result.content} />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

// defultValue : value랑 용도는 같음. 근데 수정이 가능하네
// 수정 : updateOne({수정할게시물정보},{$set:{수정내용}});
