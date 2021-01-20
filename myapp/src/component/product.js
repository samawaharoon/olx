import { render } from '@testing-library/react';
import React from 'react';

const btnstyle ={


}
const Product = ({ID, tittle,image,price,rating}) =>{
    

        
    return(
        
        
      
<div className="Product">
<div className="stylebtn">
<button>FEATURED</button>
</div>
   
    
   <img     src={image} alt="image"      />
   
    <div className="Product__info">
<p className="Product__price">
            <small>Rs</small>
            <strong>{price}</strong>

        </p>


    <p>{tittle}</p>
        <p>GODHRA,KARACHI</p>
<strong>Nov 27</strong>
      


    </div>






</div>



    )
    
}

export default Product;