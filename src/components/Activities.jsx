import React from 'react'

export default function Activities() {
  return (
    <div className='mx-w-[1140px]  m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute  z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img className='w-full h-full object-cover  relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
         alt="" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1583157048761-ac1dba033233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         alt="" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excusions</h3>
            <img  className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1544736826-31d150ac064c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         alt="" />
        </div>
         
    </div>
  )
}
