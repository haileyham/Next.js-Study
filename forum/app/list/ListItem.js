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
                                // fetch('/api/post/delete', {
                                //     method: "DELETE",
                                //     body: result[i]._id
                                // }).then((res) => {
                                //     if (res.status === 200) {//res넣어서 에러뜨면 애니메이션 실행안하도록
                                //         e.target.parentElement.style.opacity = 0;
                                //         setTimeout(() => {
                                //             e.target.parentElement.style.display = 'none'
                                //         }, 1000)
                                //     }
                                // }).catch(error => {
                                //     alert('로그인유저가 달라용')
                                // })
                                //---------위아래 동일, 코드구조 조금다를뿐--------//
                                // fetch('/api/post/delete', {
                                //     method: "DELETE",
                                //     body: result[i]._id
                                // }).then((response) => {
                                //     if (response.status === 200) {
                                //         return response.json();
                                //     } else {
                                //         throw new Error('응답 코드가 200이 아닙니다.'); // 오류 발생 시 catch 블록으로 이동(다음then못넘어감)
                                //     }
                                // }).then(() => {
                                //     e.target.parentElement.style.opacity = 0;
                                //     setTimeout(() => {
                                //         e.target.parentElement.style.display = 'none';
                                //     }, 1000);
                                // }).catch(error => {
                                //     console.error('오류 발생:', error); //위에서 던져준 Error 메시지 코드 error에서 뿜뿜
                                //     alert(error);
                                // })
                                //---------위아래 동일, HTTP 응답코드 따라--------//
                                fetch('/api/post/delete', {
                                    method: "DELETE",
                                    body: result[i]._id
                                }).then((response) => {
                                    console.log(response)
                                    if (response.status === 200) {
                                        return response.json();
                                    } else if (response.status >= 500 || response.status >= 400) { //400~500번대 에러에 맞게 메시지 띄우려고, 서버에서 error에 담아주고 여기서 출력
                                        return response.json().then(errorData => {
                                            throw new Error(errorData.error); //밑에 error로 던져줌!
                                        });
                                    }
                                }).then((res) => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000);
                                }).catch(error => {
                                    console.error('오류 발생:', error);
                                    alert(error);
                                });
                                //-----------URL parameter 이용-------------//
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


