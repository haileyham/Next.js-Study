'use client'

import React, { useState } from 'react'

export default function Modal() {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  }


  return (
    <>
      <div className='modal-container'>
        <button onClick={openModal}>{modal ? "opend" : "click"}</button>
        {modal ?
          <div className="modal" onClick={openModal}>
            <div className="modal-content">
              <div className="close-btn">&times;</div>모달창
            </div>
          </div>
          : null}
      </div>
    </>
  )
}
