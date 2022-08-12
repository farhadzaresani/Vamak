import React, { useState } from 'react'
import ChangePassword from './ChangePassword'
import InputMask from 'react-input-mask';

export default function GetCode({closeEditModal,inputNum}) {
    const[secCode,setSecCode]=useState()
    const[changePassword,setChangePassword]=useState(false)
    const submitCode = ()=>{
        setChangePassword(true)
    }
  return (

<>
    {
        changePassword
        ?
        <ChangePassword 
        closeEditModal={closeEditModal}
        />
        :
    <div>
            <div  className='fixed opacity-50 top-0 right-0 bg-black  w-[100%] h-[100vh]' ></div>
    <div className=' bg-white absolute  rounded-lg left-[30vw] top-[35vh] w-[30vw] h-[50vh]  ' > 
        <div className='m-3 flex flex-col justify-between items-center h-[45vh]'>
            <div className='flex flex-col items-end space-y-6'>
            <div className='flex justify-between w-[28vw] '>
                <button onClick={closeEditModal} className=' font-bold '>X</button>
                <h1>کد تایید</h1>
            </div>
                <p className='text-[14px] opacity-70'>کد تایید به شماره {inputNum} ارسال شد</p>
            </div>
            <div className='flex flex-col items-end'>
                <InputMask mask=" 9 - 9 - 9 - 9 - 9 " maskChar=" " onChange={(e)=>setSecCode(e.target.value)}  className=' outline-blue-400 text-[55px] border-[1px] w-[28vw] h-[6vh] rounded-sm'/>
                <button className='underline text-blue-500'>ویرایش شماره تلفن</button>
            </div>
            <div className='flex'>
                <button onClick={submitCode}  disabled={!secCode} className='disabled:opacity-30 w-[28vw] h-[6vh] rounded-sm bg-blue-600 text-white' >تایید</button>
            </div>
        </div>
    </div>
    </div>
    }
</>
  )
}
