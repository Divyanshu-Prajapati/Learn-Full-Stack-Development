import React from 'react'
import Dock from './components/Dock'
import "./app.scss"
import Nav from './components/Nav'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
    </main>
  )
}

export default App
