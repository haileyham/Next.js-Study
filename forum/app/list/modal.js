'use client'

import Link from 'next/link';
import React, { useState } from 'react'

export default function Modal() {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  }

  const closeOnClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 중지
  }

  return (
    <>
      <div className='modal-container'>
        <button onClick={openModal}>{modal ? "opend" : "click"}</button>
        {modal ?
          <div className="modal" onClick={openModal}>
            <div className="modal-content" onClick={closeOnClick}>
              <div className="close-btn" onClick={openModal}>&times;</div>
              <Link href="/">main 페이지 이동</Link>
            </div>
          </div>
          : null}
      </div>
    </>
  )
}
