import React from 'react'

const Nav = (props) => {
    console.log(props);
  return (
    <div style={{backgroundColor:props.color}} className='text-red-800 flex items-center justify-between bg-amber-100 mb-1'>
        <h2>{props.greet} {props.name}</h2>
        <div className='flex gap-16'>
            {
                props.links.map(function(elem){
                    return <h4>{elem}</h4>
                })
            }
        </div>
    </div>
  )
}

export default Nav;
