import React, { useState } from 'react'


function counterComponent() {
    const [count,setCount]= useState(0);
  return (
    <>
    <h2 className='text-lg font-bold mb-4'>The count is {count}</h2>
    <button onClick={()=>setCount(count+1)} className='bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>Click</button>
    </>
  )
}

export default counterComponent