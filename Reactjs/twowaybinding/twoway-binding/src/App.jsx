import React, { useState } from 'react'
import './App.css'
const App = () => {
  const submithandler = (e)=>{
    e.preventDefault()
    setallUsers([...allUsers,Name]);
    // const newallUsers=[...allUsers];
    // newallUsers.push(Name);
    setName('');
  }
  const[Name,setName]= useState('');
  const[allUsers,setallUsers]=useState([]);
  return (
    <div>
      <form id='forms' onSubmit={(e)=>submithandler(e)}>
        <input type="text" value={Name} placeholder='Enter your name'
        onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <button>Submit karde bhai</button>
      </form>
      {allUsers.map((elem)=>{
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App
