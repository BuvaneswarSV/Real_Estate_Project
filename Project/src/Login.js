import { Link } from 'react-router-dom'
import React, { useState } from 'react'
function Login(){
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [signIn, setSignIn] = useState(true)

  function handleLoginClick(){
      setSignIn(false)
  }
  function handleClick(e){
      e.preventDefault()
      if (!name && !password) {
          setSignIn(true)
          alert("Enter Username or Email and password")
      }
      else if(!name){
        setSignIn(true)
        alert("Enter Username or Email")
      } 
      else if(!password){
        setSignIn(true)
        alert("Enter Password")
      }
       else {
          setSignIn(false)
          localStorage.setItem(name ,password)
          setName("")
          setPassword("")
      }
  }

    return(
    <div class="head">
        <h2>Real Estate</h2>
        <div class="box">
    <h1>Login</h1>
    <input type="email" placeholder="Username/Email" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} required />
    <input type="password" placeholder="Password" name="password" minLength="8" title='Minimum 8 Characters' onChange={(e)=>{setPassword(e.target.value)}} value={password} required />
    <button type="submit" onClick={handleClick}>Login</button>
    <p>Not a member? <span><Link to='/register' onClick={handleLoginClick}>Sign Up</Link></span></p>
  </div>
  </div>
    )
}
export default Login;