'use client'

import React from 'react'
import { signIn } from 'next-auth/react'


export default function LoginBtn() {
    return (
        <button onClick={() => { signIn() }}>Login</button>
    )
}

// 자주쓸것 같으면 app폴더 밖에 폴더 하나 만들어서 사용
// client component
// import { signIn } from 'next-auth/react'    import 해와야함
// signOut은 로그아웃
