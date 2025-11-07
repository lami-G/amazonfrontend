import React, { useEffect,useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endpoint.js'
import classes from './Results.module.css'
// import ProductCard from '../../Components/ProductCard/ProductCard.jsx'
import axios from 'axios'
import ProductCard from '../../Components/Product/ProductCard.jsx'
function Results() {
    const [results,setresults]=useState([]);
    const {categoryName} = useParams()
    console.log(categoryName);

    useEffect(() => {
         axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
        setresults(res.data)
    }).catch((err)=>{
        console.log(err)
    }) 
    }, []);
   
  return (
     <LayOut>
        <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category {categoryName}</p>
      <hr />

      <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
     </LayOut>
    
  )
}

export default Results