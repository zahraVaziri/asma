
import ProductNew from "./productNew";
import React, {useEffect, useState} from "react";
import { Product } from "./product";



export const ProductListNew = (props) => {
    
    const [amir1,setAmir1]=useState(false)
    useEffect(()=>{
        setAmir1(true)
    })
    return(
<>
 <div class="row row-cols-1 row-cols-md-3 g-4">

      {props.productsnew.map((item)=> (
         
          <div class="col"> 
           {
               amir1 ? <ProductNew data={item} /> : ''
          }     
        </div>
        
      )
      )}
 
  </div>
  </>
)
    
}
