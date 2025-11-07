import React from 'react'
import {categoryInfo} from './catgoryFullinfo'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.category_container} >


{
categoryInfo.map((info)=>(
<CategoryCard data={info}/>
))}



{/* {
  categoryInfo.map((info) => (
    <CategoryCard key={info.name} data={info} />
  ))
} */}


    </section>
  )
}

export default Category