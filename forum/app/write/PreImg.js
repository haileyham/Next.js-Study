'use client'

import React, { useState } from 'react'

export default function PreImg() {
    const [preImg, setPreImg] = useState('')
    const handleFileChange = ((e) => {
        const file = e.target.files[0];
        // console.log(file)
        // console.log(file.name) //file저장이름 보여줌
        // console.log(encodeURIComponent(file.name)) //file한글명일경우 인코딩해줌 / 서버주고받을때 filename 변수에 담아서 사용해서 보내보기

        setPreImg(URL.createObjectURL(file));
    })

    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFileChange} />
            {preImg == '' ? '선택된 이미지 없음' : <img src={preImg} alt="Preview" style={{ width: "300px", height: "200px", objectFit: "cover" }} />}
        </div>
    )
}
