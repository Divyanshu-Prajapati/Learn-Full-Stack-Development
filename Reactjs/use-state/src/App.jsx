import React, { useState } from 'react'
import Nav from './nav'

const App = () => {
  const[name,setname]=useState('hello sir');
  const[num,setnum]=useState(0);
  const btnclick=()=>{
    setname('Good Bye');
  }
  const[marks,newmarks]=useState([20,30,40,50,32]);
  let gracemarks=()=>{
    let newgrace=marks.map(function(elem){
      return elem+5;
    })
    newmarks(newgrace);
  }

  return (
    <div>
      <Nav name='Divyanshu' color='blue' greet='hello' links={['Home','About us', 'Contact us','Well']} />
      <Nav name='Ankur'  color='red' greet='Bonjour' links={['Login','Product', 'Research','GoforGo']} />
      <div>
        <h1>{name}</h1>
        <button onClick={btnclick} className='border caret-cyan-600 bg-blue-300'>click me</button>
        <h1>{name}</h1>
        <h1 className='mx-17 text-7xl my-3' >{num}</h1>
        <button className='bg-blue-500 border-2 mx-2' onClick={
          ()=>{
            setnum(num+10);
          }
        }>Increase</button>
        <button className='border bg-rose-500 mb-3 mx-3.5'
        onClick={()=>{
          setnum(num-10);
        }}
        >Decrease</button>
      </div>
      <div>
        {marks.map(function(elem,idx){
          return <h1 id={idx +1}>Student {idx + 1} = {elem} ({elem>33?'PASS':'Fail'})</h1>
        })} 
        <button className='border-l-amber-900 bg-blue-900' onClick={gracemarks}>Grace give</button>
      </div>
    </div>
  )
}

export default App
