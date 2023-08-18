import React from 'react'

export default function Register() {
    return (
        <div>
            <form action="/api/auth/signup" method="POST">
                <input name="name" type="text" placeholder="name" />
                <input name="email" type="text" placeholder="email" />
                <input name="password" type="password" placeholder="pw" />
                <button type="submit">id/pw 가입요청</button>
            </form>
        </div>
    )
}
