// // mongodb 연결
// const client = await MongoClient.connect('dburl', { useNewUrlParser: true }) //db접속url연결 / async await // 이 .connent() 자주 실행하면 서버입장에서 부담(큰일남), Next.js 서버 띄울 때 1번만 실행하면 좋음 // util폴더의 databse.js로 옮김
// export { client }

//------------------------------------------------------------//
// 조금 더 정확히 하려면 밑에처럼 하기 (셋팅코드임)
//------------------------------------------------------------//

const { MongoClient } = require("mongodb");
//DB접속URL / 민감한 정보이기 때문에 따로 빼서 .gitignore 해둠(json / js모듈중에 알아서..)
//일단은js모듈import로...(config.json파일과 config.js파일 모두 .gitignore)
//[1]json
// const config = require('@/util/config.json')
// const url = config.mongodb_url;
//[2]js
import config from '@/util/config.json';
const url = config.mongodb_url;
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect() //connect한 코드를 변수에 저장해두고 쓰면 매번 실행안되고 좋음
    // 개발시 파일저장하면 next.js는 모든 JS파일 코드 전부 다시 읽고 지나감
    // else 볼록문 안에 코드만 두면 계속 실행이 되기 때문에
    // 위에처럼 if 문에 global._mongo 두고 (전체코드 써서 사용)
}

export { connectDB }