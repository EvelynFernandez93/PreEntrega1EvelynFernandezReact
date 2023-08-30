import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import imagenDiagnovet from "../NavBar/assets/diagnovet.jpeg";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav class="container-fluid justify-content-end">
        <div className="bg-teal-400 navbar navbar-dark bg-dark ">{/* mi eccomerce es la imagen del nombre del laboratorio */}
            <a className="navbar-brand d-flex ms-5  " href="#">
            <img src={imagenDiagnovet} alt="" width="200" height="100" class="d-inline-block align-text-top"></img>
            </a> 
            {/* A CONTINUACION EL NAVBAR, USANDO UNA PLANTILLA DE BOOTSTRAP */}
            <ul className="nav navbar navbar-dark bg-dark justify-content-end ">
            <li className="nav-item">
                <a className="nav-link text-light   " aria-current="page" href="#">INICIO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light " href="#">INFORMACION</a>
            </li>
            <li className="nav-item  dropdown">
                <a className="nav-link text-light k dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">PRODUCTOS</a>
                <ul class="dropdown-menu ">
                  {/* <li><a className="dropdown-item" href="#">Pantalones</a></li> */}
                  <li><Link to='category/pantalones' className="dropdown-item" href="#">Pantalones</Link></li>
                  <li><Link to='category/remeras' className="dropdown-item" href="#">Remeras</Link></li>
                  <li><Link to='category/abrigos' className ="dropdown-item" href="#">Abrigos</Link></li> 
                </ul> 
            </li>   
            
            <li className="nav-item">{/* A CONTINUACION EL icono cart formando parte de mi navbar */}
                <a className="nav-link text-light k" href="#">
                <CartWidget/>   
                </a>
            </li> 
        </ul>
        </div> 
    </nav>  
    </div>
  )
}

