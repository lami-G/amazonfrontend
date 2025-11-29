import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endpoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function ProductDetail() {
  const {productId}= useParams()
  const [product,setproduct]=useState({})
  const [loading,setloading]=useState(false)
  useEffect( () =>{
    setloading (true)
axios.get(`${productUrl}/products/${productId}`).
then((res)=>{ setproduct(res.data)
setloading(false)
})
.catch((err)=>
  {
    console.log(err)
    setloading(false)


})
  },[]


  )
  console.log(productId);
  return (

     <LayOut>
      {loading?(<Loader/>):(<ProductCard 
        product={product}
        flex={true}
        renderDesc={true}
        /> )}
      
      
         </LayOut>
    
  )
}

export default ProductDetail