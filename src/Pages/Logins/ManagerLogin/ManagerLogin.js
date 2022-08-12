import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function ManagerLogin() {
  const [name,setName]=useState()
  const [password,setPassword]=useState()
  const [incorect,setIncorect]=useState(false)
  const navigate=useNavigate()
  const admin={
    adminData: {
    name:'farhad',
    password:12345
    }}

    const handleLogin = () =>{
        if (name===admin.adminData.name||password===admin.adminData.password)
        return(
          navigate("/ManagerDashboard", { replace: false })
          )
          
          setIncorect(true)

    }
  

console.log(admin.adminData.password)



  return (
    <>
    <div className='flex flex-col  bg-[#F8F8F8] h-[100vw]'>
      <div className=' w-[90vw] flex justify-end m-10'>
        <Link to='/' className='text-[38px] text-[#FC8B18]'>پنل کاربری</Link>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <div className=' flex flex-col space-x-3 mb-3 items-center'>
          <p className='text-[28px]'>ورود</p>
          <p className='opacity-60'>لطفا برای ورود به پنل خود نام کاربری (کدملی) و رمز عبور خورد را وارد کنید</p>
        </div>
        <div className='bg-[#FFFFFF] w-[30vw] h-[22vw] rounded-lg flex flex-col space-y-6 justify-center items-center'>
          <div className='flex flex-col items-end '>
            <label>:نام</label>
            <input onChange={(e)=>setName(e.target.value)} className={`border-[1px] rounded-md ${incorect?'border-red-600':''} w-[25vw] h-[40px]`}/>
            <p className={`text-red-600 text-[12px]  ${incorect?'':'hidden'}`}> نام کاربری درست نیست</p>
          </div>
          <div className='flex flex-col items-end '>
            <label>:رمز عبور</label>
            <input onChange={(e)=>setPassword(e.target.value)}  type='password' className={`border-[1px] ${incorect?'border-red-600':''} rounded-md w-[25vw] h-[40px]`}/>
            <p className={`text-red-600 text-[12px]  ${incorect?'':'hidden'}`}>  رمز عبور درست نیست</p>
          </div>
       
          <Link to="/ForgetPassword" className='text-[12px] text-blue-700 underline flex justify-end w-[25vw]'>فراموشی رمز</Link>
          <button onClick={()=>handleLogin(name,password)} disabled={!name||!password}  className='disabled:opacity-50 w-[25vw] h-[40px] rounded-md bg-[#6873AC] text-white'>ورود به حساب کاربری</button>
        </div>
      </div>
    </div>
    </>
  )
}
