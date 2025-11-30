
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import classes from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {img} from './img/data.js'
function CarouselEffect() {
  return (
    <div>
<Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false} 
        showIndicators={false} 
>
{
img.map((imageItemLink)=>
{
    return <img src={imageItemLink}/>
}
)
}
</Carousel>
<div className={classes.hero_img}></div>

    </div>
  )
}

export default CarouselEffect