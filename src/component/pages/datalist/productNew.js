import React from "react";
import {Link} from "react-router-dom";

const ProductNew = (props) => {
    const data = props.data;

    return (
 <div class="card h-100">
        <div className={'div-img-2'}>
      <img src={data.pic} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
         <Link to={'/detailnew/' + data.id}>
        <h5 class="card-title">{data.title}</h5>
        </Link>
    <p class="card-text">{data.text}</p> 
     </div>
    </div>
    )

}
export default ProductNew