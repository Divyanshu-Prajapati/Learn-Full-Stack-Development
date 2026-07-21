import React from 'react'
import axios from 'axios'

const App = () => {
  async function getData(){
    console.log('Data Loading........')
    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(response.data);
  }
  return (
    <div>
      <h1>Hello ji...</h1>
      <button onClick={getData}>Data Lao</button>
    </div>
  )
}

export default App
