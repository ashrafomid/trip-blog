import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-[90vh] '>
        <img 
       src='https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="/"
       className='w-full h-full object-cover '
       />
    <div className='max-w-[1140px] m-auto '>
      <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
      <h1 className='font-bold text-4xl'>Find your special trip</h1>
      <h2 className='text-4xl py-4 italic'>with WeekAway</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Non repellat corrupti laudantium laboriosam officia
         nam illo ducimus facere itaque dolorum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit fuga exercitationem fugiat aut esse quod amet assumenda dignissimos, asperiores, id ad nam tempore corporis quaerat libero vel. Fuga, a?
         </p>
    </div>
    </div>
    </div>
  )
}
