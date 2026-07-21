import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Nav from './components/nav.jsx'
import { Route ,Routes} from 'react-router-dom'
import Products from './pages/products.jsx'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
