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
            <Routes>
             <Route path='/' element={<AllProducts/>}></Route>
             <Route path='Categories/Accessories' element={<Accessories/>}></Route>
             <Route path='Categories/Consoles' element={<Consoles/>}></Route>
             <Route path='Categories/Proccessors' element={<Proccessors/>}></Route>
      </Routes>
        </div>
    )   
}
export default Categories;