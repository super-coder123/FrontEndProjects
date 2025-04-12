import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/CreateContext'

function Login() {
    const [username,setusername]= useState('')
    const [password,setpassword]=useState('')
    
    const {setuser}=useContext(UserContext)
    
   const onsubmit = (e) => {
    e.preventDefault();
    setuser({username,password});
   }

    return (
    <div>
            <h2>Login</h2>
            <input type="text"
             className='h-screen w-screen bg-amber-400'
             value={username}
             onChange={(e) => setusername(e.target.value)}
             placeholder={username}
            />
            <input type="text"
             value={password}
             onChange={(e) => setpassword(e.target.value)}
             placeholder={password}
            />
           <button onClick={onsubmit}>Submit</button>
    </div>
  )
}

export default Login;
