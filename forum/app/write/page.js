import React from 'react'

export default function Write() {
    return (
        <div>
            <h1>글작성</h1>
            <form action="/api/test" method="POST">
                <input type="text" name="title" />
                <button type="submit">등록</button>
            </form>
            <form action="/api/test" method="GET">
                <button type="submit">GET</button>
            </form>
        </div>
    )
}
