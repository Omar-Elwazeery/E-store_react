import React from "react";
import { AccessoriesList } from "../../productParts/productList";
import ProductItem from "../../productParts/productItem";

function Accessories()
{
    return(
        <div className="container">
        <h3 className="text-left py-2" id="pro">Accessories</h3>
        <div className="row justify-content-center text-left" >
        {AccessoriesList.map((pl)=>{
                return (
                    <ProductItem image={pl.image} name={pl.name} price={pl.price} description={pl.description}></ProductItem>
                )
            })}
        </div>
    </div>
    );
}

export default Accessories;