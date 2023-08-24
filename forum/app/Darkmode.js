'use client'
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from 'react'

export default function DarkMode() {
    let router = useRouter();
    let [darkmode, setDarkmode] = useState('🌙');

    useEffect(() => {
        let 쿠키값 = (';' + document.cookie).split(`; mode=`).pop().split(';')[0]

        //쿠키빈값확인
        if (쿠키값 = '') {//쿠키값 있는지 확인하는 코드 (위에). // document.cookie했을때 해당 쿠키값 다나오는데 '쿠키이름=값; hello=hi; mode=light' 이렇게 나오기 때문 (앞에 ; 붙이면 전체 순서중에 젤 앞에 ; 붙여서 나옴)
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    }, [])

    function 쿠키쿠키() {
        //쿠키값 확인
        let 쿠키값 = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
        //쿠키light,dark 확인에 따라서 dark,light로 변경 해주기
        if (쿠키값 == 'light') {//쿠키값 light면
            document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
            router.refresh() //바뀐부분 새로고침
            //import { useRouter } from "next/navigation" / 변수에담기
            setDarkmode('☀️')
        } else {//쿠키값 dark로 바꿔주기
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
            router.refresh()
            setDarkmode('🌙')
        }
    }

    return (
        <span onClick={쿠키쿠키}>{darkmode}</span>
    )
}
