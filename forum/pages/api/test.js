import React from 'react'

// export default function handler(요청, 응답) {
//     console.log(123);
//     return 응답.status(200).json('처리완료')
// }

// 서버는 기능실행 후에 유저에게 응답해야함
// 첫째파라미터 요청 : 요청과 관련된 정보
// 둘째파라미터 응답 : 응답도와줌

//------------------------------------------------------------//

// 서버에 GET / POST 요청오면 각각 다른 코드 실행하도록

export default function handler(요청, 응답) {
    if (요청.method === "POST") {
        return 응답.status(200).json("포스트 처리완료")
    } else if (요청.method === "GET") {
        console.log(123);
        return 응답.status(200).json("겟겟 처리완료")
    }
}