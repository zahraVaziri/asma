import { useParams } from "react-router";
import { ProductServise } from "./ProductServise";
import './DataList.css'
const DataList = () => {

    const {id} = useParams()

    const data = ProductServise.getProductsById(id)
  return (
    <div className={'div-single'} >
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div class="card" >
                        <img src={data.pic} class="card-img-top" alt="..."/>
                        <div class="card-body single">
                            <h5 class="card-title ">{data.title}</h5>
                            <p class="card-text">{data.text}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  );
}

export default DataList;
