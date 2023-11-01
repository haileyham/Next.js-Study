import { connectDB } from '@/util/database';
import Link from 'next/link';
import React from 'react'
import DetailLink from './DetailLink';
import ListItem from './ListItem';
import Modal from './modal'

export const dynamic = 'force-dynamic'

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection('post').find().toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  })
  // 자꾸 경고 메시지 떠서
  // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
  // ListItem에 id값만 toString() 혹은 passHref을 다 붙였지만 해결되지않았음
  // list에서 result 하위컴포넌트로 넘겨주기 전에 id값만 toString() 변경해서 보내줬어야함!후후...그래도 해결!

  return (
    <div className="list-bg">
      <Modal></Modal>
      <h1>forum</h1>
      <ListItem result={result} />
      <aside className='list-aside'>
        <Link href="/">
          <p>지금 바로 Quiz!</p>
          <img src="/finjake.jpg" alt="quiz" />
        </Link>
      </aside>
    </div>
  )
}
