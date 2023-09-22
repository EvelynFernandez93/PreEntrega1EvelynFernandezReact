import React, { useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function CartWidget() {

  const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <div>
     <h3 >
        <Link className="nav-link text-light k" to="/carrito"><IoCartOutline/> {cantidadEnCarrito()}</Link> 
    </h3> 
    </div>
  )
}
