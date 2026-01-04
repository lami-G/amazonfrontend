import React ,{useContext,useState, useEffect}from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Orders.module.css"
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
function Orders() {


  const [{user},dispatch]=useContext(DataContext);
  const [orders,setorder]=useState([])
  useEffect(()=>{




    if(user){
db.collection("users").doc(user.uid).collection("orders")



    }
  })
  return (

     <LayOut>
       <section className={classes.container}>
        <div className={classes.order_container}>


<h2>  your orders</h2>

{/*   ordered items */}
<div>                 </div>



        </div>
        
        
        </section> 
         </LayOut>
    
  )
}
 
export default Orders