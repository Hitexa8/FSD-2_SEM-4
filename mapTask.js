// of objects with pic name and price property of 2 products.Display img and price of the product  browser using map method.
import React from 'react'

const example = (props)=>{
   return(<>{
    props.info.map((value)=>{
        return(
            <div style={{display:'inline-block'}}>
            <img src={value.pic} alt={value.pic}></img>
            <h2>{value.name}</h2>
            <h2>{value.price}</h2> 
            </div>
        )
    })
   }
    </>
)}
export default example
