import { connectDB } from '@/util/database';
import Link from 'next/link';
import React from 'react'

export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();
    // console.log(result)
    // console.log(result[0].title)

    return (
        <div className="list-bg">
            {
                result.map((a, i) => { //{return()}없애도됨. 없앨때 중괄호{}랑 return 같이 없애야함}
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${result[i]._id}`}>
                                <h4>{result[i].title}</h4>
                                <p>{result[i].content}</p>
                                {/* a.title 혹은 a.content 같기 때문에취향차이 */}

                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
