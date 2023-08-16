import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    try {
        const db = (await connectDB).db("forum");
        const postID = 요청.query.id;
        let result = await db.collection('post').deleteOne({ _id: new ObjectId(postID) });
        return 응답.status(200).json('삭제완료') //삭제완료 문구를 보내고있음
    } catch (error) {
        return 응답.status(500).json('삭제에러')
    }
}

// 계속 500 에러떴는데..하 똑같은 실수 또했꾸만 ㅠㅠ
// connectDB랑 ObjectId 를 import 안했쓰요~_~;

// pages/api/abc/[id].js 여서
// {id : id값} 이렇게 값이 들어오기 때문에
// postID = 요청.query.id 담아줘서 사용하기(바로사용해도 상관없음)

