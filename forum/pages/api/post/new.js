import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions); //서버에서 사용할 때는 요청,응답 같이 받아야함 / authOption은 계정정보 가져오는것 [...nextauth].js에 있음
    // console.log(session)

    if (session) {// session.user.email 쓰는데 만약 로그아웃했을때는 user가 null값 들어가기 때문에 session이 true일때만 작동하도록 if 문 사용
        요청.body.author = session.user.email; //요청.body에다가 author 추가하기. 값은 session.user.email로 넣기
        // console.log(요청.body) / 아래 출력됨
        // [Object: null prototype] {
        //     title: 'aaa',
        //     content: 'aaa',
        //     author: 'roserealslow@gmail.com'
        //   }
    }

    if (요청.method === "POST") {
        if (요청.body.title == '') {
            return 응답.status(400).json('제목을 입력행!') // 400 Bad Request
        }
        try {
            const db = (await connectDB).db("forum");
            let result = await db.collection('post').insertOne(요청.body);
            return 응답.status(200).redirect(302, '/list')
        } catch (error) {
            return 응답.status(500).json('서버 에러가 발생했습니다.'); // 500 Internal Server Error
        }
    }
}

//------------------------------------------------------------//

// DB에 document 하나 발행 : insertOne()
// post 컬렉션에 document 하나 발행해서 insertOne(데이터)의 데이터를 넣어줌

//------------------------------------------------------------//

// redirect() : 응답과 동시에 페이지 이동 / 그냥 경로만 적으면 안되고, (302,'경로') 적어야함. 안그러면 무한로딩

//------------------------------------------------------------//

// input 값 빈칸 전송 이슈
//  if (요청.body.title == '') {
//     return 응답.status(400).json('제목을 입력행!')
// }

//------------------------------------------------------------//

// DB 에러 예외처리
// try,catch

//------------------------------------------------------------//

// 버튼 연타하면 그만큼 글 발행되는 이슈(다중 클릭 방지, 중복클릭방지)
// https://itworldyo.tistory.com/entry/submit-%EC%A4%91%EB%B3%B5-%ED%81%B4%EB%A6%AD-%EB%A7%89%EA%B8%B0
// 클라이언트/서버측 에서 각각 작업 필요
// 방법1. confirm() 메시지 창으로 중복 클릭 차단
// 방법2. 클릭체크 변수로 중복 클릭 차단
// 방법3. if문(서버)
// 기타 방법...등등 흠 ...
// 동일한 제목과 content를 사용할 수도 있으니, id값을 비교해서 중복처리 하는게 나을듯?ㅇ?
// 근데 빠르게 연타한건 이 방법으로 못막네..
// 일단 클라측에서 막고, 서버측은 express-rate-limit 해봐야겠다 추후에!_!
// https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-API-%EC%82%AC%EC%9A%A9%EB%9F%89-%EC%A0%9C%ED%95%9C%ED%95%98%EA%B8%B0

//------------------------------------------------------------//
//------------------------------------------------------------//

// 글 작성시 글쓴이 정보도 같이 저장
// 