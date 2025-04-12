import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <UserContextProvider>
      <div className='w-screen h-screen flex justify-center items-center'>
        <h1 >Hello React Learner</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App;
