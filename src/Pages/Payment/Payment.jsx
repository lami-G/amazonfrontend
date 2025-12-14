import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './Payment.module.css'
function Payment() {
  return ( <LayOut>
    {/*header */}
            <div className={classes.payment_header}> Checkout(2) items</div>
{/*            payment method */}

<section> 
{/* address*/}
<div></div>
<hr />
{/* product */}
<div> </div>
<hr />
{/* card*/}
<div> </div>
</section>





         </LayOut>
    
  )
}

export default Payment