import React from 'react'

const Navbar = () => {

    const getDate = ()=>{
        let now = new Date();
        let date = now.toLocaleDateString()
        return date;
    }


  return (
    <>
      <div className='h-15 w-screen bg-blue-900 flex justify-between items-center flex-row'>
        <h1 className='text-white text-2xl p-3'>Note Taking App</h1>
        <span className='text-white p-3 m-3'>{getDate()}</span>
      </div>
    </>
  )
}

export default Navbar
