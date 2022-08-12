import React,{useState} from 'react'

export default function EnterNumber({closeEditModal,nextStep,inputNum,setInputNum}) {
    
  return (
    <>
<div onClick={closeEditModal} className='fixed opacity-50 top-0 right-0 bg-black w-[100%] h-[100vh]' ></div>
    <div className=' absolute bg-white rounded-lg left-[30vw] top-[35vh] w-[30vw] h-[50vh]  ' > 
        <div className='m-3 flex flex-col justify-between items-center h-[45vh]'>
            <div className='flex flex-col items-end space-y-6'>
            <div className='flex justify-between w-[28vw] '>
                <button onClick={closeEditModal} className=' font-bold '>X</button>
                <h1>ویرایش رمز عبور</h1>
            </div>
                <p className='text-[14px] opacity-70'>برای ویرایش رمز عبور باید ابتدا شماره تلفن خود را وارد کنید</p>
            </div>
            <div className='flex flex-col items-end'>
                <label>:شماره تلفن</label>
                <input onChange={(e)=>setInputNum(e.target.value)} className='border-[1px] w-[28vw] h-[6vh] rounded-sm'/>
            </div>
            <div className='flex'>
                <button onClick={nextStep} disabled={!inputNum} className='disabled:opacity-30 w-[28vw] h-[6vh] rounded-sm bg-blue-600 text-white' >تایید</button>
            </div>
        </div>
    </div>
    </>
  )
}
