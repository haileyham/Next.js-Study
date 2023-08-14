import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function Detail(props) {
    const db = (await connectDB).db("forum");
    // let result = await db.collection('post').findOne({ _id: new ObjectId('64d9a316dce5a38bc6e45cc5') });
    //DB에서 게시물 1개만 가져오려면 .findOne({찾을document정보 : _id값 가져와서 사용하기})
    // { _id: new ObjectId('id값') }
    // ObjectID import해오기
    // 하드코딩 할 수 없으니, props로 부모 컴포넌트가 보낸것 받아서 넣기

    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
    console.log(props)
    // http://localhost:3000/detail/1 유저가 URL에 입력한 값 출력은
    // { params: { hello: '1' }, searchParams: { } }
    // http://localhost:3000/detail/aaa { params: { hello: 'aaa' }, searchParams: {} }
    // 유저가 detail/[id]/page.js에서 [id] 자리에 입력한 값을 출력 가능함
    console.log(props.params.id)
    // 이렇게 props.params.id 하면은 id값이 들어감
    // 그러면 url에 id값 입력하면 해당 페이지를 보여주게 됨
    // http://localhost:3000/detail/64d9a316dce5a38bc6e45cc5
    // 하지만 유저가 직접 복잡한 id값을 입력할 수는 없으니, list에서 목록 하나 누를때마다 해당 id값 link 혹은 a로 넘어가기

    return (
        <div>
            <h1>Detail Page</h1>
            <h2>{result.title}</h2>
            <p>{result.content}</p>
        </div>
    )
}
