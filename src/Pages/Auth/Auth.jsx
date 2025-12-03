import React,{useContext} from 'react'
import {useState} from 'react'
import ClassNames from './Auth.module.css'
import { Link } from 'react-router-dom'
import {auth} from "../../Utility/firebase"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { Type } from '../../Utility/actiontype'
import {ClipLoader} from "react-spinners"
function Auth() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState({signIn:false
  ,signUp:false})

const [{user},dispatch]=useContext(DataContext)
  console.log(user)
  const authHandler=(e)=>{
e.preventDefault()
console.log(e.target.name)
if(e.target.name==="signin"){
  setLoading({...loading,signIn:true})
  signInWithEmailAndPassword(auth,email,password).then((userinfo)=>{
    console.log(userinfo);
    dispatch({type:Type.SET_USER,user:userinfo.user})
    setLoading({...loading,signIn:false})
  }).catch((error)=>{
  

setError(error.message)

setLoading({...loading,signIn:false})

  })

}
else{
  setLoading({...loading,signUp:true})
  createUserWithEmailAndPassword(auth,email,password).then((userinfo)=>{

   
    dispatch({type:Type.SET_USER,user:userinfo.user})
    setLoading({...loading,signUp:false}) 
  })
  .catch((error)=>{
setError(error.message)
setLoading({...loading,signUp:false})
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

        {loading.signIn ? <ClipLoader size={20} color='white'/> : " Sign in"}
     
      </button>

</form>
<div>
    <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

    <button type="submit" onClick={authHandler} className={ClassNames.login_registerbutton}
    name="signup">
      {loading.signUp?<ClipLoader size={20} color='white'/>:"  Create your Amazon Account"}
            
    </button>

    {error && <p style={{color:"red",paddingTop:"5px"}}>{error}</p>}
</div>

    </div>
            </section>
        
         
  )  
}


export default Auth