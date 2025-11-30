


// {
//     img.map((image)=>{

//     return <img src={image}  />
// }





// )
// }
import React, { useEffect, useState } from 'react'

function t() {

    const [count,setcount]=useState(0);
    let increase
  return (
    <div>{count}</div>
  )
}

export default t
useEffect(()=>{

    increase=setInterval(()=>{
        setcount((precount)=>precount+1)
    },1000)
},
[count]


)