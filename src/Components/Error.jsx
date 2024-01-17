import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='font-bold items-center'>
        <h1>Error</h1>
        <button className='cursor-pointer border-2 border-black px-2' onClick={() => navigate("/")}>Back To Home</button>
      </div>
    </>
  )
}

export default Error