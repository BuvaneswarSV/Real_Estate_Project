import { Link } from 'react-router-dom'
import { useState } from 'react'
function Registration(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setCpassword] = useState()
  const [signIn, setSignIn] = useState(true)

  function handleLoginClick(){
      setSignIn(false)
  }
  function handleClick(e){
      e.preventDefault()
      if (!name && !password && !email) {
          setSignIn(true)
          alert("Enter Username and Email and password")
      }
      else if(!name){
        setSignIn(true)
        alert("Enter Username")
      } 
      else if(!password){
        setSignIn(true)
        alert("Enter Password")
      }
      else if(!cpassword){
        setSignIn(true)
        alert("Enter Confirm the Password")
      }
      else if(!email){
        setSignIn(true)
        alert("Enter Email")
      }
       else {
          setSignIn(false)
          localStorage.setItem(name ,password)
          alert("Saved in Local Storage")
          setName("")
          setPassword("")
          setEmail("")
          setCpassword("")
      }
  }
    return(
    <div class="body-content">
      <div class="module">
        <h1>Create an account</h1>
        <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
          <div class="alert alert-error"></div>
          <input type="text" placeholder="User Name" name="username" onChange={(e)=>{setName(e.target.value)}} value={name} required />
          <input type="email" placeholder="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
          <input type="password" placeholder="Password" name="password" autocomplete="new-password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required />
          <input type="password" placeholder="Confirm Password" name="confirmpassword" autocomplete="new-password" onChange={(e)=>{setCpassword(e.target.value)}} value={cpassword} required />
          <div class="avatar"><label>Select your avatar: </label><input type="file" name="avatar" accept="image/*"  /></div>
          <input type="submit" value="Register" name="register" class="btn btn-block btn-primary" onClick={handleClick} /><br/>
          <p>Already a member? <span><Link to='/' onClick={handleLoginClick}>Login</Link></span></p>
        </form>
      </div>
    </div>
    )
    }
    export default Registration;