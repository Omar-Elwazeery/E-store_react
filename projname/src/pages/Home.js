import React from "react";

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css';


function Home() 
{
    const item = [
        {
            img: './imgs/1.png',
            name: 'Cooling',
        },
        {
            img: './imgs/2.png',
            name: 'Ryzen',
        },
        {
            img: './imgs/3.png',
            name: 'pc bundle',
        },
        {
            img: './imgs/4.png',
            name: 'headset',
        },
        {
            img: './imgs/1.png',
            name: 'Cooling',
        },
        {
            img: './imgs/2.png',
            name: 'Ryzen',
        },
        {
            img: './imgs/3.png',
            name: 'pc bundle',
        },
        {
            img: './imgs/4.png',
            name: 'headset',
        },
]; 
      
    const options = {
        items:4,
        nav: true,
        rewind: true,
        autoplay: true,
        margin:10,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
    };
     

    return (
        <div className="Content">             
            {/* // Start Slider  */}
            <OwlCarousel options={options} >
                {
                    item.map((item,key)=>{
                        return <div className="owl-item">
                            <img className="product_image" src={item.img} />
                            <a className="product_title">{item.name}</a>
                        </div>
                    })
                }
            </OwlCarousel>
                <br />
            {/* Start products */}
            <div className="container ">
                <div className="product">
                    <h3 className="text-left py-2" id="pro">Products</h3>
                    <div className="row justify-content-center text-left">
                    {
                        item.map((item,key)=>{
                            return(
                                <div className="card col-md-3 text-center" >
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">25 L.E <br/> </p>
                                    <a href="#" className="btn btn-primary buy-button  ">Buy now</a>
                                </div>
                            </div>
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