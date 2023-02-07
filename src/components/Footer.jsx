import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'


function Footer() {
  return (
    <div className='max-w-[1140px] w-full py-8  m-auto border-t-4 '>
        <div className='flex items-center m-auto justify-center'>
            <BsChatSquareDots className='text-[#5651e5] mr-2 ' size={30} />
            <h1 className='text-xl font-bold text-gray-700'>EXPLORATION</h1>
        </div>
    </div>
  )
}
export default Footer;
