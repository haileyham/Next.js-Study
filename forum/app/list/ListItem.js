'use client'

import Link from 'next/link'
import React from 'react'

export default function ListItem({ result }) {


    return (
        <div className='hello'>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${result[i]._id}`}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>수정🖍</Link>
                            <span style={{ cursor: "pointer" }} onClick={(e) => {
                                fetch('/api/post/delete', {
                                    method: "DELETE",
                                    body: result[i]._id
                                }).then((result) => {
                                    result.json()
                                }).then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none'
                                    }, 1000)
                                })

                                // fetch(`/api/abc/${result[i]._id}`)
                                //     .then((result) => {
                                //         result.json()
                                //     }).then(() => {
                                //         e.target.parentElement.style.opacity = 0;
                                //         setTimeout(() => {
                                //             e.target.parentElement.style.display = 'none'
                                //         }, 1000)
                                //     })
                            }}> 삭제🗑</span>
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


