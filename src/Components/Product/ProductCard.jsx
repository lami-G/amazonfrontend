import React from 'react'
import Rating from '@mui/material/Rating'
import Currencyformat from '../Currencyformat/Currencyformat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
function ProductCard({product,flex,renderDesc}) {

  const {
    id = "",
    title = "",
    price = 0,
    rating = { rate: 0, count: 0 },
    image = "",
    description = ""
} = product;

  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>

<Link to={`/products/${id}`}>

<img src={image} alt="" />


</Link>

<h3>{title}</h3>
{ renderDesc && <p>{description}</p> }
<div className={classes.rating}>
    {/* {rating} */}
    <Rating value={rating?.rate} precision={0.1} />

{/* count */}
<small>{rating?.count}</small>
</div>
<div>

    {/* {price} */}
<Currencyformat amount={price} />
</div>

<button className={classes.button}>

  add to cart
</button>
    </div>
  )
}

export default ProductCard