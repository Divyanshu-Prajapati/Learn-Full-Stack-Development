import React, { useState } from 'react'
import Card from './components/Card';
function submithandler(e){
  e.preventDefault();
  console.log("submitted");
}
const App = () => {
  const[name,setname]=useState('');
  const[imageurl,setimageurl]=useState('');
  const[role,setrole]=useState('');
  const[desc,setdesc]=useState('');

  const[allUser,setallUser]=useState([]);
  const deletehandler =(idx)=>{
    const copyusers=[...allUser]
    copyusers.splice(idx,1);
    setallUser(copyusers)
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form className='p-2 flex flex-wrap justify-center' onSubmit={(e)=>{
        submithandler(e);
        const oldarr=[...allUser];
        oldarr.push({name,role,imageurl,desc});
        console.log(oldarr);
        setallUser(oldarr);       
        setname('');
        setimageurl('')
        setrole('');
        setdesc('');

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
           <Card
           key={idx}
            user={user}
            idx={idx}
            deletehandler={deletehandler}
          />
       )
        })}
        </div>
    </div>
  )
}

export default App
