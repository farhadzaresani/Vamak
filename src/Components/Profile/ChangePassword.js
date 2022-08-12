import React, { useState } from 'react'
import SuccsesPass from './SuccsesPass'

export default function ChangePassword({closeEditModal}) {

    const[succsesCh,setSuccsesCh]=useState(false)

    const submitPass= () =>{
        setSuccsesCh(true)
        
    }

  return (
    <div>
        {succsesCh
        ?
    <SuccsesPass 
    closeEditModal={closeEditModal}
    />
:
<div>
    <div  className='fixed opacity-50 top-0 right-0 bg-black  w-[100%] h-[100vh]' ></div>
<div className=' bg-white absolute  rounded-lg left-[30vw] top-[35vh] w-[30vw] h-[50vh]  ' > 
<div className='m-3 flex flex-col justify-between items-center h-[45vh]'>
    <div className='flex flex-col items-end space-y-4'>
    <div className='flex justify-between w-[29vw] '>
        <button onClick={closeEditModal} className=' font-bold '>X</button>
        <h1>رمز عبور جدید</h1>
    </div>
        <p className='text-[14px] opacity-70'>رمز عبور باید حداقل دارای 8 کاراکتر و ترکیب حروف کوچک و بزرگ باشد</p>
    </div>
    <div className='flex flex-col items-end'>
        <label>:رمز عبور</label>
        <input   className='border-[1px] w-[28vw] h-[6vh] rounded-sm'/>
    </div>
    <div className='flex flex-col items-end'>
        <label>:تکرار رمز عبور </label>
        <input   className='border-[1px] w-[28vw] h-[6vh] rounded-sm'/>
    </div>
    <div className='flex'>
        <button onClick={submitPass}   className='disabled:opacity-30 w-[28vw] h-[6vh] rounded-sm bg-blue-600 text-white' >تایید</button>
    </div>
</div>
</div>
</div>
}
</div>
  )
}
