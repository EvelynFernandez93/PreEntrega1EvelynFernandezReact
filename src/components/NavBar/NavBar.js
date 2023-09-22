import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import even from "../NavBar/assets/even.jpeg"
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  return (
    <div>
      <nav className="container-fluid justify-content-end">
        <div className="bg-teal-400 navbar navbar-dark bg-dark ">
           <li className="nav-item">
                <Link to='/' className="navbar-brand d-flex ms-5  "><img src={even} alt="" width="200" height="100" className="d-inline-block align-text-top"></img></Link>
           </li>
            <ul className="nav  navbar-dark bg-dark  ">
              <li className="nav-item">
                <Link to='/' className="nav-link text-light"  aria-current="page" >Inicio</Link>  
              </li>
              <li className="nav-item">
                <Link to='productos/remeras' className="nav-link text-light"  aria-current="page" >Remeras</Link>   
              </li>
              <li className="nav-item">
                <Link to='productos/pantalones' className="nav-link text-light"  aria-current="page" >Pantalones</Link>   
              </li>
              <li className="nav-item">
                <Link to='productos/abrigos' className="nav-link text-light"  aria-current="page" >Abrigos</Link>   
              </li>
              <li className="nav-item">
                <Link to='/contacto' className="nav-link text-light"  aria-current="page" >Contacto</Link>   
              </li>   
              <li className="nav-item">
                <Link to='/carrito' className="nav-link text-light k" ><CartWidget/></Link>
              </li> 
            </ul>
        </div> 
    </nav>  
    </div>
  )
}

