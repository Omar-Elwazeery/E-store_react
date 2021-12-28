import React from "react";
import '../styles/Category.css';
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom'

function SecNavbar()
{
    
    return(
        <div className='secondNavbar'> 

        <div className='leftSide'>
            <Link to='/'>All</Link>
            <Link to='/Proccessors'>Proccessors</Link>
            <Link to='/Accessories'>Accessories</Link>
            <Link to='/Consoles'>Consoles</Link>
        </div>
    </div>
    )
}
export default SecNavbar