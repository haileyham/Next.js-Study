'use client'

import React, { useState } from 'react'

export default function PreImg() {
    const [preImg, setPreImg] = useState('')
    const handleFileChange = ((e) => {
        const file = e.target.files[0];
        setPreImg(URL.createObjectURL(file));
    })

    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFileChange} />
            {preImg == '' ? '선택된 이미지 없음' : <img src={preImg} alt="Preview" style={{ width: "300px", height: "200px", objectFit: "cover" }} />}
        </div>
    )
}
