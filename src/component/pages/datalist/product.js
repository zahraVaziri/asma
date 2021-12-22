import React from "react";
import {Link} from "react-router-dom";
export const Product = (props) => {
    const data = props.data;

    return (

<div class="col">
    <div class="card h-100">
      <img src={data.pic} class="card-img-top" alt="..."/>
      <div class="card-body">
          <Link to={'/detail/' + data.id}>
        <h5 class="card-title">{data.title}</h5>
        </Link>
        <p class="card-text">{data.text}</p>
      </div>
    </div>
  </div>

      )

}
