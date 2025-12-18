import React,{useContext,useState} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import Currencyformat from '../../Components/Currencyformat/Currencyformat';
function Payment() {
const [{user,basket}, dispatch] = useContext(DataContext);
console.log(user)
 const totalItem=basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)

  const total = basket.reduce((amount, item) =>{
  return  item.price*item.amount + amount },0)
const [carderror,setcarderror]=useState(null);
const stripe=useStripe();
const elements=useElements();

const handlechange=(e)=>{
  console.log(e)
 e?.error?.message ? setcarderror(e?.error?.message): setcarderror("")
}



  return (
    
    <LayOut>
    {/*header */}
            <div className={classes.payment_header}> Checkout({totalItem}) items</div>
{/*            payment method */}

<section className={classes.payment} > 
{/* address*/}
<div className={classes.flex}>
<h3> delivery address</h3>

<div>
<div>
{user?.email}
  
</div>
<div>={true}

123

</div>
<div>


chicago, IL
</div>
</div>



</div>

<hr />
{/* product */}
<div className={classes.flex}> 
<h3> review items and delivery</h3>
<div>  
{  basket.map((item)=><ProductCard product={item} flex/>)}


</div>

</div>
<hr />
{/* card*/}
<div className={classes.flex}>
  <h3> payment method</h3>
  <div className={classes.payment_container}>  
    
    
     <div>
      <div className={classes.payment_details}>           
<form action=" ">  
{/* error*/}
  {carderror && <small style={{color:red}}>{carderror}</small>}
  <CardElement onChange={handlechange} />
  {/* price   */ }

<div className={classes.payment_price}>      
   <div>
  <span style={{display:"flex",gap:"10px"}}>  <p> Total Order | </p>   <Currencyformat amount={total}/>  </span>
  
  
  
  
  </div>     
  <button>  Pay now</button>
  
       </div>



      </form>
       </div>

     </div>
  
  
       </div>
  



   </div>
</section>





         </LayOut>
    
  )
}

export default Payment