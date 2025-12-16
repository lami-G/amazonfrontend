import React,{useContext} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
function Payment() {
const [{user,basket}, dispatch] = useContext(DataContext);
console.log(user)
 const totalItem=basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)


  return ( <LayOut>
    {/*header */}
            <div className={classes.payment_header}> Checkout({totalItem}) items</div>
{/*            payment method */}

<section className={classes.payment} > 
{/* address*/}
<div className={classes.flex}>
<h3> delivery address</h3>

<div>
<div>
{user.email}
  
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
  
   </div>
</section>





         </LayOut>
    
  )
}

export default Payment