import React, { useState } from 'react'
const App = () => {
  const[name,setname]=useState('');
  const[imageurl,setimageurl]=useState('');
  const[role,setrole]=useState('');
  const[desc,setdesc]=useState('');

  const localData=JSON.parse(localStorage.getItem('all-users')) || []
  console.log(localData)

  const[allUser,setallUser]=useState(localData);
  const deletehandler =(idx)=>{
    const copyusers=[...allUser]
    copyusers.splice(idx,1);
    setallUser(copyusers)
    localStorage.setItem('all-users',JSON.stringify(copyusers))
  }
  const submithandler = (e)=>{
    e.preventDefault();
    const oldUser=[...allUser];
    oldUser.push({name,role,imageurl,desc});
    setallUser(oldUser);
    localStorage.setItem('all-users',JSON.stringify(oldUser))
    setname('');
    setimageurl('')
    setrole('');
    setdesc('');
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form className='p-2 flex flex-wrap justify-center' onSubmit={(e)=>{
        submithandler(e);  
      }}>
        
        <input 
        className=' border text-xl px-5 py-2 rounded m-2 w-[48%]' 
        type="text" placeholder='Name'
        value={name}
        onChange={(e)=>{
          setname(e.target.value);
        }}/>
        <input
         className='border text-xl px-5 py-2 rounded m-2 w-[48%]'
          type="text" placeholder='Image Url'
          value={imageurl}
          onChange={(e)=>{
          setimageurl(e.target.value);
        }}/>
        <input
         className='border text-xl px-5 py-2 rounded m-2 w-[48%]'
          type="text"  placeholder='Enter Role'
          value={role}
          onChange={(e)=>{
          setrole(e.target.value);
        }}/>
        <input 
        className='border text-xl px-5 py-2 rounded m-2 w-[48%]'
         type="text"  placeholder='Enter Description'
         value={desc}
         onChange={(e)=>{
         setdesc(e.target.value);
        }}/>
        <button className='px-5 py-2 rounded m-2 w-[98%] bg-emerald-500'>Create user</button>
      </form>
      <div className='px-4 py-10 flex gap-4 flex-wrap'>
         {allUser.map(function(user,idx){
          return(
           <div key= {idx} className='w-[22vw] bg-white text-black rounded-xl p-5  px-8 text-center flex flex-col items-center'>
         <img  className=' h-24 w-24 rounded-full 'src={user.imageurl} alt=" image" />
         <h1 className='text-2xl mt-2 font-semibold'>{user.name}</h1>
         <h5 className='text-base text-blue-500 font-semibold my-2'>{user.role}</h5>
         <p className='text-sm font-medium leading-tight'>{user.desc}</p>
         <button onClick={()=>{
          deletehandler(idx);
        }} className='px-4 py-2 rounded bg-red-600 text-white font-semibold mt-3 cursor-pointer active:scale-95'>Remove</button>
          </div>
       )
        })}
        </div>
    </div>
  )
}

export default App
