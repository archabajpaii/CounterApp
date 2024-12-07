import React from 'react'
import CounterComponent from './components/counterComponent'

function App() {
  return (
    <>
    <div className='bg-slate-50min-h-screen flex items-center justify-center'>
    <div className='bg-red-400 text-center flex flex-col items-center justify-center  mt-56 rounded-lg shadow-lg p-6 w-80'>
      <h1 className='max-w-md mx-auto rounded-lg shadow-lg p-6 bg-lime-200'>My counter App</h1>
    <CounterComponent />
    </div>
    </div>
    </>
  )
}

export default App