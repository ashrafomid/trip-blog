import React from 'react'

export default function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto p-4 py-16'>
        <h2 className='text-center text-gray-700 '>Gallery</h2>
        <div className='grid sm:grid-col-5 gap-4 '>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-conver ' src="https://images.unsplash.com/photo-1544736826-61c35a3511dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-conver ' src="https://images.unsplash.com/photo-1600207861931-1c0756006697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-conver ' src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-conver'  src="https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-conver' src="https://images.unsplash.com/photo-1517309230475-6736d926b979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-conver' src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}
