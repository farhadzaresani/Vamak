import React, { useState } from 'react' 
import EditPassword from '../../Components/Profile/EditPassword'
import Succses from '../../Components/Profile/Succses'


export default function ProfileManeger() {

  const[succses,setSuccses]=useState(false)
  const[editPass,setEditPsss]=useState(false)

  const submit= ()=>{
  setSuccses(true)  
  }

  const close=()=>{
    setSuccses(false)
  }

  const editPassword= () =>{
    setEditPsss(true)
  }
  const closeEditModal = () =>{
    setEditPsss(false)
  }


  return (
    <>
  {
  succses
  ?
  <Succses
  close={close}
  />
  :
  null
}
{
  editPass
  ?
  <EditPassword
  closeEditModal={closeEditModal}
  />
  :
  null
}

    <div dir="rtl" className='mr-[13vw] flex bg-[#F8F8F8]'>
      <div className='bg-white w-[80vw] mx-20 my-5'>
        <div className='flex justify-between m-5 '>
          <div className='flex jusify-center items-center '>
            <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
            <h1>پروفایل</h1>
          </div>
          <h1 className='underline text-orange-400'>ویرایش</h1>
        </div>
        <div>
          <div className=' flex justify-between items-center  mx-5 mt-10'>
            <div className='space-y-10 '>
              <div className='flex flex-col '>
                <label>:نام</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col'>
                <label>:نام</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col '>
                <label>شماره تلفن:</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col'>
                <label>:آدرس محل سکونت</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
            </div>
            <div className='space-y-10'>
              <div className='flex flex-col'>
                <label>:نام</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col'>
                <label>:کد ملی</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col'>
                <label>:شماره تلفن ثابت</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
              <div className='flex flex-col'>
                <label>:کد پستی</label>
                <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
              </div>
            </div>
          </div>

          <div> 
              <div className='flex flex-col mr-5 mt-10'>
                <label>:رمز عبور</label>
                <div className='flex'>
                  <button onClick={editPassword}  className='absolute mt-1 mr-[22vw] text-orange-400'>تغییر رمز عبور</button>
                  <input type="password" className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
                </div>
              </div>
          </div>

        </div>

        <div className=' flex justify-end'>
          <button onClick={submit} className='bg-[#6873AC] w-[9vw] h-[7vh] rounded-sm left-5 ml-5 my-10 text-white'>ثبت</button>
        </div>
      </div>  
    </div>
    </>
  )
}
