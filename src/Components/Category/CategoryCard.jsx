import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom'
function CategoryCard({data}) {
  // console.log(data) * S6 { title: 'Electronics', name: 'electronics', imgLink: 'https://m.media-amazon.com/images/I/71k3b+9kGXL._AC_UF894,1000_QL80_.jpg'}
  return (
    <div className={classes.category}>
        <Link to={`/category/${data.name}`}>
<span>

    <h2> {data.title}  </h2>
</span>
<img src={data.imgLink}  />

<p>shop now</p>
        </Link>
        </div>
  )
}
 
export default CategoryCard