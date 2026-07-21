import React from 'react'
import Users from './users'
import Card from './card'

const App = () => {
  return (
    <div>
      {Users.map((user) =>(
        <Card
        key={user.id}
        name={user.name}
        role={user.role}
        img={user.image}
        />
        )) }
      
    </div>
  );
}

export default App
