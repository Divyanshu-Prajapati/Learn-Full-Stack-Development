import React from 'react'

const Card = ({ user, idx, deletehandler }) => {
  return (
    <>
    <div key='{idx}' className='w-[22vw] bg-white text-black rounded-xl p-5  px-8 text-center flex flex-col items-center'>
        <img  className=' h-24 w-24 rounded-full 'src={user.imageurl} alt=" image" />
        <h1 className='text-2xl mt-2 font-semibold'>{user.name}</h1>
        <h5 className='text-base text-blue-500 font-semibold my-2'>{user.role}</h5>
        <p className='text-sm font-medium leading-tight'>{user.desc}</p>
        <button onClick={()=>{
          deletehandler(idx);
        }} className='px-4 py-2 rounded bg-red-600 text-white font-semibold mt-3 cursor-pointer active:scale-95'>Remove</button>
          </div>
  </>
  )
}

export default Card;
