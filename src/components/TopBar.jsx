import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots size={30} className=' mr-2 text-[#709dff]'/>
        <h1 className='text-xl font-bold text-gray-700'>EXPLORATION</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6 '>
          <AiOutlineClockCircle size={20} className='mr-2 text-[#5651e5] '/>
          <p className='text-sm text-gray-700'>8AM - 4PM</p>
        </div>
        <div className='hidden md:flex items-center'>
          <AiFillPhone className='mr-2 text-[#5651e5]'/>
          <p className='text-sm text-gray-700'>+93 794842517</p>
        </div>
        <button>Get a Free Article</button>
      </div>
    </div>
  )
}
// add react icon in dependencies   
export default TopBar