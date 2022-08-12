import React, { useRef, useState } from 'react'
import SuccseModal from './SuccseModal'
import InputMask from 'react-input-mask';

export default function Request() {

    const[showModal,setShowModal]=useState(false)
    const[shebaNum,setShebaNum]=useState()
    const[numbbers,setNumbers]=useState()
    const inputsNumbers=([1,2,3,4,5,6,7,8,9,10,11])
      
       
    const nextComponent=useRef()
    const openModal = ()=>{
        setShowModal(true)
        return(
            <div className='absolute bg-red-600'>open</div>
        )
    }
    const closeModal = () =>{
        setShowModal(false)
    }
    const handleKey = (e) => {
        
        if(e.target.value.length===1)
        e.target.nextSibling.focus();
        else if(e.target.value.length===0)
        e.target.previousSibling.focus()
      };
   
            // console.log(shebaInputs)
  return (
    <>
   
    {
        showModal
        ?
        <SuccseModal
        closeModal={closeModal}
        />
        :
        null       
    }
    <div className=' bg-white flex justify-between rounded-lg w-[75vw] h-[50vh] mb-10 '>

        <div className=' w-[50%] flex flex-col py-5 justify-between items-center'>
            <div className='flex justify-center items-center m-2 space-x-2'>
                <h1 className='font-bold'>درخواست تسویه حساب</h1>
                <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
            </div>
            <div className='flex flex-col items-end mb-5' >
                <p>:شماره شباء</p>
                <div className='border-[2px] rounded-md w-[35vw] h-[8vh] flex items-center justify-between '>
                <p className='text-orange-500 ml-7'>IR-</p>
                <div className='mr-7 flex space-x-3'>
                    <div className=''>
                        <input  onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                        <input  onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                    </div>
                    <div>
                        <input  onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                        <input  onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                        <input  onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                    </div>
                    <div>
            {
                inputsNumbers.map((items,i)=>
                <input key={i} onKeyDown={handleKey} onChange={(e)=>setShebaNum(e.target.value)} maxLength='1'  className='w-[1vw] h-[3vh] border-[1px] border-[#d6d6d6]'/>  
                )
            }
                    </div>  
            </div>
                </div>
            </div>
            <div>
                <button disabled={!shebaNum}  className='disabled:opacity-20 w-[35vw] h-[6vh] rounded-md border-[2px] border-green-500 text-green-500 '>ارسال درخواست</button>
            </div>
        </div>
        <div className='w-[2px] h-[45vh] bg-[#979797] mt-5'></div>

        <div className=' w-[50%] flex flex-col py-5 justify-between items-center'>
            <div className='flex justify-center items-center m-2 space-x-2'>
                <h1 className='font-bold'>واریز به صندوق</h1>
                <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
            </div>
            <div className='flex flex-col items-end' >
                <p>:مبلغ</p>
                <input onChange={(e)=>setNumbers(e.target.value)} className='w-[35vw] h-[6vh] rounded-md border-[2px] border-[#d6d6d6]'/>
                <p>.حداقل مبلغ برای واریز به صندوق 1/000/000 ریال است</p>
            </div>
            <div>
                <button onClick={openModal} disabled={!numbbers} className=' disabled:opacity-20 w-[35vw] h-[6vh] rounded-md border-[2px] border-green-500 text-green-500 '>پرداخت</button>
            </div>
        </div>
     
    </div>
    
     </>
  )
}
