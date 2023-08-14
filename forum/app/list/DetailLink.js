'use client'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation' //next/router 말고, next/navigation
import React from 'react'

export default function DetailLink() {
    let router = useRouter();
    let 현재URL출력 = usePathname();
    let SearchParameter출력 = useSearchParams();
    let user가dynamicRoute에입력한것출력 = useParams();

    return (
        <div>
            <button onClick={() => { router.push('/') }}>홈이동</button>
            <button onClick={() => { router.back() }}>뒤로가기</button>
            <button onClick={() => { router.forward() }}>앞으로가기</button>
            <button onClick={() => { router.refresh() }}>바뀐내용만 새로고침</button>
            <button onClick={() => { router.prefetch('/detail/dfs') }}>페이지 미리로드</button>
        </div>
    )
}

// 페이지 이동하는 다른 방법
// 컴포넌트 하나 만들고
// useRouter(); import 하여 변수에 담아 사용
{/* <button onClick={() => { router.push('/') }}>Button</button> */ }
// 온클릭 버튼에 router.push('이동할 경로')쓰면 페이지 이동
// '/' 홈페이지로 이동, '/list' list 페이지로 이동

{/* <button onClick={() => { router.prefetch('/detail/dfs') }}>페이지 미리로드</button> */ }
// 해당페이지 미리 로드하여, 후에 해당페이지 방문할 때 빠르게 로드 가능함
// 근데 Link 태그에도 prefetch 기능 내장되어 있음
// 스크롤 내리다가 Link 만나는 순간, 자동으로 페이지 미리 로드해줌
// 근데 Link 모두 미리 로드해놓기엔 부담될 수 있어서
// <Link prefetch={false} href="">해서 꺼놓을수도있음
// (참고) 개발중일때는 prefetch 확인불가, 나중에 사이트 발행하고 확인 가능

// useRouter는 client component에서만 사용가능하기 때문에
// server component에서 사용하고 싶으면, import해서 사용하기