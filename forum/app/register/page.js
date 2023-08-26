import React from 'react'

export default function Register() {
    return (
        <div>
            <form action="/api/auth/signup" method="POST" className='registerBox'>
                <h1>회원가입</h1>
                <input name="name" type="text" placeholder="name" />
                <input name="email" type="text" placeholder="email" />
                <input name="password" type="password" placeholder="pw" />
                <button type="submit">가입요청</button>
            </form>
        </div>
    )
}
