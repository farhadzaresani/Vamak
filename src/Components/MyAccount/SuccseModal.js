import React from 'react'

export default function SuccseModal({closeModal}) {
  return (
    
       <>
            <div onClick={closeModal} className='fixed opacity-50 top-0 right-0 bg-black w-[100%] h-[100vh]' ></div>
            <div className=' absolute bg-white rounded-lg top-[35vh] w-[40vw] h-[30vh]  ' > 
                <div className='flex flex-col items-center justify-between h-[20vh] my-5'>
                <h1>پرداخت شما به حساب صندوق با موفقیت انجام شد</h1>
                <button onClick={closeModal} className='bg-[#35EB28] w-[6vw] h-[5vh] rounded-sm text-white '>تایید</button>
                </div>
            </div>
          </>

  )
}
