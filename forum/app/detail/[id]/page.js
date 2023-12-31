import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'
import Comment from './Comment';
import notFound from './not-found';

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  // let result = await db.collection('post').findOne({ _id: new ObjectId('64d9a316dce5a38bc6e45cc5') });
  //DB에서 게시물 1개만 가져오려면 .findOne({찾을document정보 : _id값 가져와서 사용하기})
  // { _id: new ObjectId('id값') }
  // ObjectID import해오기
  // 하드코딩 할 수 없으니, props로 부모 컴포넌트가 보낸것 받아서 넣기

  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
  // console.log(props)
  // http://localhost:3000/detail/1 유저가 URL에 입력한 값 출력은
  // { params: { hello: '1' }, searchParams: { } }
  // http://localhost:3000/detail/aaa { params: { hello: 'aaa' }, searchParams: {} }
  // 유저가 detail/[id]/page.js에서 [id] 자리에 입력한 값을 출력 가능함

  // console.log(props.params.id)
  // dynamic route에서 [id]여기에 들어가는 값을 출력 가능한 것
  // http://localhost:3000/detail/64d9a316dce5a38bc6e45cc5 이렇게 되어있을때 [64d9a316dce5a38bc6e45cc5]이 부분이 [id]임
  // 위에는 hello :'1'로 뜨는 이유는 처음에 그렇게 실험해봤기 때문
  // 바로 밑에줄에 id:'id블라블라' 뜨는 이유는 detail 페이지 다음단계에서 Link로 /detail/id값넣기 로 url 이동했기 때문
  // { params: { id: '64d9a316dce5a38bc6e45cc5' }, searchParams: {} } 이렇게 들어옴 props.params.id하면 각 id값 출력 가능
  // 이렇게 props.params.id 하면은 id값이 들어감
  // 그러면 url에 id값 입력하면 해당 페이지를 보여주게 됨
  // http://localhost:3000/detail/64d9a316dce5a38bc6e45cc5
  // 하지만 유저가 직접 복잡한 id값을 입력할 수는 없으니, list에서 목록 하나 누를때마다 해당 id값 link 혹은 a로 넘어가기

  // if (result === null) {
  //     return notFound()
  // }

  return (
    <div className='detailPage'>
      <h1>Detail Page</h1>
      <header className='detailTitle'>
        <h2>{result.title}</h2>
        <p>작성자 : {result.author}</p>
      </header>
      <main className='detailContent'>
        <p>{result.content}</p>
      </main>
      <footer className='detailComment'>
        {/* 댓글 컴포넌트(클라이언트 컴포넌트 댓글바로 반영되도록) */}
        {/* 하위컴포넌트에 detail 글아이디 보냄 */}
        <Comment _id={result._id.toString()} />
      </footer>
    </div>
  )
}
