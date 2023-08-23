'use client'
import React from 'react'

export default function Error({ error, reset }) {
    return (
        <div>Error<button onClick={() => { reset() }}>페이지 다시로드</button></div>
    )
}
