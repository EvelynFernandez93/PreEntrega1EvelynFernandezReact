import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import imagenDiagnovet from "../NavBar/assets/diagnovet.jpeg"
import { Link } from 'react-router-dom'



export default function NavBar() {
  

  return (
    <div>
      <nav className="container-fluid justify-content-end">
        <div className="bg-teal-400 navbar navbar-dark bg-dark ">
            <a className="navbar-brand d-flex ms-5  " ></a> 
            <Link to='/'>
              <img src={imagenDiagnovet} alt="" width="200" height="100" className="d-inline-block align-text-top"></img>
              </Link>
            
            {/* A CONTINUACION EL NAVBAR, USANDO UNA PLANTILLA DE BOOTSTRAP */}
            <ul className="nav navbar navbar-dark bg-dark justify-content-end ">
            <li className="nav-item">
                <Link to='/' className="nav-link text-light"  aria-current="page" >INICIO</Link>
                
            </li>
            <li className="nav-item">
                <Link to='/formulario' className="nav-link text-light"  aria-current="page" >FORMULARIO</Link>
                
            </li>
            {/* <li className="nav-item">
                <a className="nav-link text-light " >INFORMACION</a>
            </li> */}
            <li className="nav-item  dropdown">
                <a className="nav-link text-light k dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">PRODUCTOS</a>
                <ul className="dropdown-menu ">
                  <li><Link to='category/pantalones' className="dropdown-item" >Pantalones</Link></li>
                  <li><Link to='category/remeras' className="dropdown-item" >Remeras</Link></li>
                  <li><Link to='category/abrigos' className ="dropdown-item" >Abrigos</Link></li> 
                </ul> 
            </li>   
            
            <li className="nav-item">{/* A CONTINUACION EL icono cart formando parte de mi navbar */}
                <a className="nav-link text-light k" >
                <CartWidget/>   
                </a>
            </li> 
        </ul>
        </div> 
    </nav>  
    </div>
  )
}

