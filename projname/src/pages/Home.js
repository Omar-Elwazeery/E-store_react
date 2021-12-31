import React from "react";

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css';
import {AllList} from '../productParts/productList';
import ProductItem from "../productParts/productItem";
function Home() 
{
//     const item = [
//         {
//             img: './imgs/1.png',
//             name: 'Cooling',
//         },
//         {
//             img: './imgs/2.png',
//             name: 'Ryzen',
//         },
//         {
//             img: './imgs/3.png',
//             name: 'pc bundle',
//         },
//         {
//             img: './imgs/4.png',
//             name: 'headset',
//         },
//         {
//             img: './imgs/1.png',
//             name: 'Cooling',
//         },
//         {
//             img: './imgs/2.png',
//             name: 'Ryzen',
//         },
//         {
//             img: './imgs/3.png',
//             name: 'pc bundle',
//         },
//         {
//             img: './imgs/4.png',
//             name: 'headset',
//         },
// ]; 
      
    const options = {
        items:5,
        nav: true,
        rewind: true,
        autoplay: true,
        margin:2,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
    };
     

    return (
        <div className="Content">             
            {/* // Start Slider  */}
            <div class="slider">
                <OwlCarousel options={options} >
                    {
                        AllList.map((item,key)=>{
                            return <div className="owl-item">
                                <div class="product_image">
                                    <img src={item.image} />
                                </div>
                                <div class="product_title">
                                    <a href="#">{item.name}</a>
                                </div>
                            </div>
                        })
                    }
                </OwlCarousel>
            </div>
                <br />
            {/* Start products */}
            <div className="container ">
                <div className="product">
                    <h3 className="text-left py-2" id="pro">Products</h3>
                    <div className="row justify-content-center text-left">
                    {
                        AllList.map((item,key)=>{
                            return(
                                <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} description={item.description}></ProductItem>


                            //     <div className="card col-md-3 text-center" >
                            //     <img src={item.image} className="card-img-top" alt="..." />
                            //     <div className="card-body d-flex flex-column">
                            //         <h5 className="card-title">{item.name}</h5>
                            //         <p className="card-text">{item.price} L.E<br/> </p>
                            //         <a href="#" className="btn btn-primary buy-button  ">Buy now</a>
                            //     </div>
                            // </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </div>








    )   
    
}
export default Home