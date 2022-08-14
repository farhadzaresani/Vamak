import React,{useState} from 'react'

export default function Connections() {
  const[readMore,setReadMore]=useState(false)

  const more= ()=>{
      setReadMore(!readMore)
  }
  return (
    <div dir='rtl' className='bg-[#F8F8F8] w-[98vw] flex flex-col items-center h-[120vh]'>
      <div className='bg-white w-[75vw] h-[14vh] flex items-center rounded-t-md mr-[14vw] mt-5'> 
        <div className=' flex jusify-center items-center mr-3 '>
          <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
          <h1 className='text-[20px]'>ارتباطات</h1>
        </div>
      </div>
      <div>
        <div className='bg-red-600 w-[30vw]'>

        </div>
      
        <div className='bg-white flex flex-col  w-[50vw] mr-[15vw] pb-5 rounded-b-md my-3'>
         
            <div className=' flex flex-col space-y-5 my-10 justify-center items-center'>
                <div className='flex flex-col'>
                    <label>موضوع:</label>
                    <input className='border-[2px] w-[40vw] h-[6vh] rounded-md border-[#F8F8F8]'/>
                </div>
                <div className='flex flex-col'>
                    <label>متن:</label>
                    <textarea className='border-[2px] w-[40vw] h-[35vh] rounded-md border-[#F8F8F8]'/>
                </div>
                <button className='bg-[#6873AC] text-white w-[40vw] h-[6vh] rounded-md'>ارسال پیام</button>
            </div>
            <div className='bg-[#FEF2E7]'>
                <div className='flex justify-between m-5'>
                    <h1 className='text-orange-500'>مدیر</h1>
                    <h1>1401/05/21</h1>
                </div>
                <div className='flex justify-between m-5'>

                <p className={`${readMore?'':'truncate'} text-[12px]  `}>سلام خدمت تمامی کارکنان محترم هیات فاطمیون 
                    من زمانی که قسط شماره 5 وام خودم را پرداخت کردم برام پیام تایید آمد و از حساب من پول کسر شد اما حالت قسط من عوض نشد و در همان حالت پرداخت نشده است 
                    ممنون میشوم که پیگیری کنید
                </p>
                <button className='text-[12px] opacity-40 w-[15vw]' onClick={more}> بیشتر بخوانید...</button>
                </div>
            </div>
            <div>

            </div>
        </div>
      
    
    </div>
    </div>
  )
}
