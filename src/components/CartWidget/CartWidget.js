import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <div>
     <h3 >
        <Link className="nav-link text-light k" to="/carrito"><IoCartOutline/></Link>
        
        0
    </h3> 
    </div>
  )
}
