import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
      <h2>Navbar</h2>
      <div className='flex gap-8'>
        <a href="/">Home Page</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
      </div>
    </div>
  )
}

export default Nav
