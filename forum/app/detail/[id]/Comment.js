'use client'

import React, { useEffect, useState } from 'react';

export default function Comment({ _id }) {
    const [comment, setComment] = useState('');
    // console.log(comment);
    // console.log(_id);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`/api/comment/list?id=${_id}`) //서버에 GET요청하면서 데이터 보내기/query string방법/?이름=값 써서 보내기/id란 이름으로 props _id 값 보내고 있음
            .then((r) => { return r.json() }) //서버에서 보낸 데이터 출력 / .then((r) =>  r.json() ) 쓰거나 위에처럼{}안에 return 쓰기(까먹지말자~)
            .then((result) => { //서버에서 보낸 데이터 result에 저장
                // console.log(result)
                setData(result) //state에 담아주기 / 조금 늦게 처리되기때문에 밑에 console.log(data)에는 안찍힐 수 있음. 정상동작함
                // console.log(data)
            })
    }, [])
    // useEffect
    // 특징1 : html로드/재렌더링 될 때마다 실행
    // > ,[] : html 로드될 때 1회만 실행됨
    // 특징2 : html 보여준 후에 늦게 실행시작(html 렌더링 후에 실행)

    // 컴포넌트 html 보여주고 ajax 실행되는데 (UX적으로 더 나음)
    // 1. 일단 html 내용 띄우고
    // 2. ajax로 데이터 가져오기 
    // 3. ajax 결과 html에 넣어주기


    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/comment/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: comment, _id: _id }),
                //예시 {"comment":"ㅁ","_id":"64d9c0a9dce5a38bc6e45cc7"}
            });

            if (response.ok) {
                // 성공적으로 처리된 경우에 대한 로직 추가
                const newList = await response.json();
                console.log(newList)
                setData(newList);
                setComment('');
                // console.log(data)
            } else {
                // 에러 처리 로직 추가
                const errorResponseData = await response.json();
                console.error('Error response:', errorResponseData);
            }
        } catch (error) {
            console.error('Error sending comment:', error);
        }
    };

    return (
        <div>
            {/* 수평줄 생성 hr */}
            <hr></hr>
            {
                data.length > 0 ? //댓글 목록 처음 뜰 때 시간 걸리기 때문에 로딩중으로 처리
                    data.map((a, i) => {
                        return (
                            // 반복문 쓸 때 key값 넣어주기
                            <div key={i}>
                                <p>
                                    <span>작성자 : {a.author_name} / </span>
                                    댓글 : {a.content}
                                    <button onClick={() => {
                                        fetch(`/api/comment/delete?id=${a._id}&author=${a.author}`, {//댓글 id를 서버로 보내줘야함/ &붙여서 데이터 추가 전송하기 / 댓글작성자 구분위해서 author 전송
                                            method: 'DELETE'
                                        })
                                            .then((response) => response.json())
                                            .then((result) => {
                                                if (result === '삭제완료') {
                                                    setData(data.filter(comment => comment._id !== a._id)) // data(댓글목록)를 filter돌려서 댓글 삭제반영
                                                } else {
                                                    console.error('댓글 삭제 실패', result)
                                                }
                                            })
                                            .catch((error) => {
                                                console.error('Error deleting comment:', error);
                                                // 에러 처리 로직을 추가하십시오.
                                            });
                                    }}>삭제</button>
                                </p>
                            </div>)
                    })
                    : '댓글 목록 로딩중'
            }
            {/* onChange는 <input>에 유저가 입력할 때마다 실행됨  */}
            {/* e.target.value는 유저가 input에 입력한 값이 남음 */}
            <input onChange={(e) => setComment(e.target.value)} value={comment} />
            {/* 서버로 댓글내용 전송 */}
            <button onClick={handleSubmit}>댓글전송</button>
        </div>
    );
}