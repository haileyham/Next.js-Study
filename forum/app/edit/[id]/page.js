import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function Edit(props) {
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    return (
        <div className='p-20'>
            <h1>글 수정</h1>
            <form action="/api/post/edit" method="POST">
                <input type="text" name="title" placeholder="글 제목" defaultValue={result.title} />
                <input type="text" name="content" placeholder="글 내용" defaultValue={result.content} />
                <input style={{ display: "none" }} type="text" name="_id" placeholder="글 내용" defaultValue={result._id.toString()} />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

// defultValue : value랑 용도는 같음. 근데 수정이 가능하네
// 수정 : updateOne({수정할게시물정보},{$set:{수정내용}});
// input style display none으로 해놓고 id 값 서버로 넘겨주기 위해서 해놓기
// toString()처리 해주기 : 서버와 데이터 주고받을 때 문자, 숫자, JSON 이런 것만 주고받을 수 있고, 문자로 치환해서 사용하기
// name _id 까먹지말기

/*
(참고) GET, POST 말고 PUT, DELETE 요청으로 서버와 통신가능한데ㅡ
PUT은 수정, DELETE는 삭제할 때 쓰면 좋은데 서버 api들 끼리 이쁘게 구분하기 위함이고 필수는 아님
단점은 <form>으로 데이터 전송시 PUT, DELETE는 사용할 수 없어서 굳이 쓰고 싶으면 외부 라이브러리 설치하거나  해야함
그래서 코드가 너무 길거나 그런게 아니면 <form>으로 데이터 전송시엔 일단 POST 요청 쓰는게 낫다고 하는데 ...
*/
