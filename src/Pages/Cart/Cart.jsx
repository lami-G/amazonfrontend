import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import Currencyformat from '../../Components/Currencyformat/Currencyformat'
import {Link} from 'react-router-dom'
import classes from './Cart.module.css'
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)
 const total = basket?.reduce((amount, item) =>{
  return  item.price + amount },0)
  return (
    <LayOut>
      <section className={classes.container}>

        <div  className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            basket.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
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
