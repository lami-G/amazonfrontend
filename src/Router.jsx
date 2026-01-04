import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'

import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Auth from './Pages/Auth/Auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51SbKkQDBUVt7xtbV8dl2o6qGsYii9WDxVsDZIse2Jm6rNO6QTCsMBCpT3C1rBrax8gpmCGCZS8adEmerkkdi1NvL00FP8KdF4l');


function Routering() {
  return (
    
        <Router>
          
             <Routes>
               <Route path='/' element={<Landing/>}/> 
                 <Route path='/auth' element={<Auth/>}/> 
  <Route path='/payment' element={

    <ProtectedRoute msg={"you must login to pay"}
             redirect={"/payment"}         >  <Elements stripe={stripePromise}>   <Payment/ > 
    </Elements> </ProtectedRoute>
    }/> 
    <Route path='/orders' element={
      
       <ProtectedRoute msg={"you must login to see your orders"}
             redirect={"/orders"}  >     <Orders/> </ProtectedRoute>
      
     
      
      
      
      }/> 
  <Route path='/cart' element={<Cart/>}/> 
  <Route path='/category/:categoryName' element={<Results/>}/> 
  <Route path='/products/:productId' element={<ProductDetail/>}/>
               <Route path='*' element={<h1>404 Not Found</h1>}/>
                </Routes> 
        </Router>
  )
}

export default Routering