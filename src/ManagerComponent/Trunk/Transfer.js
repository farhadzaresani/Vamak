import React from 'react'

export default function Transfer() {
  return (
    <div className='bg-white rounded-md w-[40vw] h-[55vh] m-10 '>
      <div className='flex flex-col items-center'>
        <div className='flex '>
            <div className='w-[20vw] flex justify-center border-b-2  text-[24px] opacity-50'>
                <button className='opacity-50'>دریافت</button>
            </div>
            <div className='w-[20vw] flex justify-center border-b-2 border-orange-500 text-[24px] text-orange-500'>
                <button>واریز</button>
            </div>
        </div>
        <div>
        <div className='flex '>
              <input   className='w-[25vw] h-[6vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-1 mr-[22vw] text-orange-400'> ریال</label>
          </div>
        </div>
      </div>
      
      <div></div>
    </div>
  )
}
