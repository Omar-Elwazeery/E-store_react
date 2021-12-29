import React from "react";
import Category from "../components/SecNavbar";
import AllProducts from "../pages/productCategory/AllProducts";
import Accessories from "../pages/productCategory/Accessories";
import Consoles from "../pages/productCategory/Consoles";
import Proccessors from "../pages/productCategory/Proccessors";
import {Route, Routes  } from "react-router-dom";


function Categories() 
{
    return (
        <div>
            <Category/>

        </div>
    )   
}
export default Categories;