import React from 'react'
import ClassNames from './Auth.module.css'
import { Link } from 'react-router-dom'


function Auth() {
  return (
    <section className={ClassNames.login}>    
    
    
      
          <div>

            <Link >
            
            <img   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
          </div>
    <div className={ClassNames.login_container}>
      <h1>Sign in</h1>
<form action="" method="post">


      <div>
<label htmlFor="Email"> Email</label>
<input type="email" id='email'/>


      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id='password' />
      </div>

      <button className={ClassNames.login_signinbutton} type='submit'>
        Sign in
      </button>

</form>
<div>
    <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

    <button className={ClassNames.login_registerbutton}>
             Create your Amazon Account
    </button>
</div>

    </div>
            </section>
        
         
  )
}

export default Auth