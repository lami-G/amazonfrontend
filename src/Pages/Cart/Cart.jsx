import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import Currencyformat from '../../Components/Currencyformat/Currencyformat'
import {Link} from 'react-router-dom'
import classes from './Cart.module.css'
import {Type} from '../../Utility/actiontype'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { RiArrowDownDoubleLine } from "react-icons/ri";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)
 const total = basket.reduce((amount, item) =>{
  return  item.price*item.amount + amount },0)
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,item })}

      const decrement=(id)=>{
        dispatch({
          type:Type.REMOVE_FROM_BASKET,id })}


  console.log(basket)
  return (
    <LayOut>
      <section className={classes.container}>

        <div  className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {
          basket?.length === 0? (
            <p>Your basket is empty</p>
          ) : (
            basket?.map((item, i) => {
           return  <section className={classes.cart_product} >
<ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
              <div className={classes.btn_container}>
<button className={classes.btn} onClick={()=>increment(item)}><RiArrowUpDoubleLine size={20}/></button>
<span>{item.amount}</span>  
<button  className={classes.btn} onClick={()=>decrement(item.id)}><RiArrowDownDoubleLine size={20} /></button>

              </div>

           </section> 
})
          )
        }
        </div>

        
          {basket?.length !== 0 && (

<div  className={classes.subtotal}>
  <div>       <p>
    Subtotal ({basket.length} items)
    </p>
    
   <Currencyformat amount={total}/> </div> 
<span>

  <input type="checkbox" />
  <small> This order contains a gift</small>
</span>
   <Link to="/payment">Continue to check out</Link>
  </div>

          )}
      

      </section>
    </LayOut>
  )
}

export default Cart
