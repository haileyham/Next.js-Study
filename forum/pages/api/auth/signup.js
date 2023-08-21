import { connectDB } from '@/util/database'
import React from 'react'
import bcrypt from 'bcrypt'

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        if (요청.body.name == "") {// 각 빈칸 / 클라이언트쪽에서도 하기
            return 응답.status(400).json('이름을 입력해 주세요')
        } if (요청.body.email == "") {
            return 응답.status(400).json('이메일을 입력해 주세요')
        } if (요청.body.password == "") {
            return 응답.status(400).json('비밀번호를 입력해 주세요')
        }

        let db = (await connectDB).db('forum');
        let 찾자 = await db.collection('user_cred').findOne({ email: 요청.body.email })

        if (찾자) { // 이미 가입된 이메일 확인
            return 응답.status(400).json('이미 가입된 이메일입니다.');
        } else {
            let hash = await bcrypt.hash(요청.body.password, 10); // [2]비번암호화해서 저장, 숫자는 아무숫자기입(암호화정도임)
            // console.log(hash); //암호화 되어서 출력
            // console.log(요청.body); //비번 그냥 출력됨. 집어넣어주기
            요청.body.password = hash; //[3] pw부분 암호화한걸로 변경해주기
            // let db = (await connectDB).db('forum');
            요청.body.role = "normal"; // 기본유저 normal 부여 / 관리자는 admin으로
            await db.collection('user_cred').insertOne(요청.body); //DB로 전송 user_cred 콜렉션에 회원정보 보관 / 유저가 보낸 요청.body를 넣어줌{name:abc,email:abc,password:abc}들어감 / [1]비번은 암호화 처리 필요
            // 비번 암호화해서 저장 : 라이브러리 npm install bcrypt 설치
            응답.status(200).json('요청성공'); //DB forum의 user_cred에 저장됨
        }
    }
}
