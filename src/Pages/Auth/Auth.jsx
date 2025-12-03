import React,{useContext} from 'react'
import {useState} from 'react'
import ClassNames from './Auth.module.css'
import { Link } from 'react-router-dom'
import {auth} from "../../Utility/firebase"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { Type } from '../../Utility/actiontype'
function Auth() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)
const [{user},dispatch]=useContext(DataContext)
  console.log(user)
  const authHandler=(e)=>{
e.preventDefault()
console.log(e.target.name)
if(e.target.name==="signin"){
  signInWithEmailAndPassword(auth,email,password).then((userinfo)=>{
    console.log(userinfo);
    dispatch({type:Type.SET_USER,user:userinfo.user})
  }).catch((error)=>{
    console.log(error)
  })

}
else{
  createUserWithEmailAndPassword(auth,email,password).then((userinfo)=>{
    console.log(userinfo)
    dispatch({type:Type.SET_USER,user:userinfo.user})
  })
  .catch((error)=>{
    console.log(error)
  })
}}
  // console.log(email,password)
  return (
    <section className={ClassNames.login}>    
    
    
      
          <div>

            <Link >
            
            <img   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
          </div>
    <div className={ClassNames.login_container}>
      <h1>Sign in</h1>
<form action="" >


      <div>
<label htmlFor="Email"> Email</label>
<input value={email} 
onChange={(e)=>setEmail(e.target.value)} 
type="email" id='email'/>


      </div>
      <div>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
      </div>

      <button className={ClassNames.login_signinbutton} type='submit' onClick={authHandler}
      name='signin'>
        Sign in
      </button>

</form>
<div>
    <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

    <button type="submit" onClick={authHandler} className={ClassNames.login_registerbutton}
    name="signup">
             Create your Amazon Account
    </button>
</div>

    </div>
            </section>
        
         
  )
}


export default Auth