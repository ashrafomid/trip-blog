import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='mx-w-[1140px] m-auto w-full p-4 py-16  '>
        <h2 className='text-center text-gray-700'>Send Us a Message</h2>
        <p className='text-center text-gray-700 py-2 '>We are Standing By!</p>
        <div className='grid md:grid-cols-2 '>
            <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt="/" 
            className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
            />
            <form>
                <div className='grid grid-cols-2 '>
                <input className='border m-2 p-2 ' type="text" placeholder='First Name' />
                <input className='border m-2 p-2 ' type="text" placeholder='Last Name' />
                <input className='border m-2 p-2' type="email" placeholder='Email' />
                <input type="tel" className='border m-2 p-2 ' placeholder='Phone' />
                <input type="text" className='boder col-span-2 p-2 m-2 ' placeholder='Address' />
                <textarea
                className='border col-span-2 m-2 p-2 '
                cols="30" rows="10"></textarea>
                <button className='col-span-2 m-2 rounded'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
