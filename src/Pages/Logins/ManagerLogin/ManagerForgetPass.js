import React, { useRef, useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

export default function ManagerForgetPass() {
    const [number,setNumber]=useState()
    const [submit,setSubmit]=useState(false)
    const ref=useRef(null)
    const navigate=useNavigate()
    const handleNumber = ()=>{
        setSubmit(true)
    }
    const editNumber = ()=>{
        setSubmit(false)
    }
    const doneLogin = () =>{
      navigate("/ManagerDashboard", { replace: false })
    }
    useEffect(()=>{
      setInterval(()=>{
    
        const e =Number(ref.current.innerHTML)
        ref.current.innerHTML=e -1
      },1000)
    },[])
  return (
    <div className='flex flex-col justify-center  bg-[#F8F8F8] h-[40vw]'>
    {!submit
    ?
    ( 
        <div className=' flex flex-col items-center justify-center'>
    <div className=' flex flex-col space-x-3 mb-3 items-center'>
      <p className='text-[28px]'>فراموشی رمز عبور</p>
      <p className='opacity-60'>.لطفا برای وارد شدن  رمز به وامک شماره تلفن خود را وارد کنید</p>
    </div>
    <div className='bg-[#FFFFFF] w-[30vw] h-[15vw] rounded-lg flex flex-col space-y-8 justify-center items-center'>
      <div className='flex flex-col items-end '>
        <label>:شماره تلفن</label>
        <input pattern="[0-9]*" type='tel' onChange={(e)=>setNumber(e.target.value)} value={number} className={`border-[1px] rounded-md  w-[25vw] h-[40px]`}/>
   
      </div>
        <Link to="/ManagerLogin" className='text-[12px] text-blue-700 underline flex justify-end w-[25vw]'>بازگشت به صفحه ی قبل</Link>
     <button disabled={!number} onClick={()=>handleNumber()}  className='disabled:opacity-50 w-[25vw] h-[40px] rounded-md bg-[#6873AC] text-white'>تایید</button>
    </div>
  </div>
        )
        :
        (
<div className=' flex flex-col items-center justify-center'>
    <div className=' flex flex-col space-x-3 mb-3 items-center'>
      <p className='text-[28px]'>کد تایید</p>
      <p className='opacity-60'>.کد تایید به شماره {number} ارسال شد.کد را در کادر زیر وارد کنید</p>
    </div>
    <div className='bg-[#FFFFFF] w-[30vw] h-[18vw] rounded-lg flex flex-col space-y-8 justify-center items-center'>
      <div className='flex flex-col items-center '>
     
        <InputMask mask=" 9 - 9 - 9 - 9 - 9 " maskChar=" "   className={`text-[45px] border-[1px] rounded-md  w-[25vw] h-[40px]`}/>
        <div className='text-[12px] text-blue-700 underline flex justify-center items-center w-[25vw] ' >
            ارسال مجدد
        <h1 ref={ref}>60</h1>,
        </div>

      </div>
      <div className='flex justify-between w-[25vw]'>
        <Link to="/" className='text-[12px] text-blue-700 underline flex justify-end '>بازگشت به صفحه ی ورود</Link>
        <button onClick={()=>editNumber()} className='text-[12px] text-blue-700 underline flex justify-end '>ویرایش شماره تلفن</button>
      </div>
     <button disabled={!number} onClick={()=>doneLogin()}  className='disabled:opacity-50 w-[25vw] h-[40px] rounded-md bg-[#6873AC] text-white'>تایید</button>
    </div>
  </div>

        )
            
}
</div>
  )
}
