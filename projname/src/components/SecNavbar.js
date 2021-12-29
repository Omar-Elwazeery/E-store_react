import React from "react";
import '../styles/Category.css';
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom'

function SecNavbar()
{    
    return(
        <div className='secondNavbar'> 
        <button>All</button>
        <button>Accessories</button>
        <button>Proccessors</button>
        <button>Consoles</button>
        
    </div>
    )
}

{/* <div className='leftSide'>
            <Link to='/'>All</Link>
            <Link to='/Proccessors'>Proccessors</Link>
            <Link to='/Accessories'>Accessories</Link>
            <Link to='/Consoles'>Consoles</Link>
        </div> */}

export default SecNavbar