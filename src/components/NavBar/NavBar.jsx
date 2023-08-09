import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import imagenDiagnovet from "../NavBar/assets/diagnovet.jpeg"

export const NavBar = () => {
  return (
    <nav class="container-fluid justify-content-end">
        <div class="bg-teal-400 navbar navbar-dark bg-dark ">{/* mi eccomerce es la imagen del nombre del laboratorio */}
            <a class="navbar-brand d-flex ms-5  " href="#">
            <img src={imagenDiagnovet} alt="" width="200" height="100" class="d-inline-block align-text-top"></img>
            </a> 
            {/* A CONTINUACION EL NAVBAR, USANDO UNA PLANTILLA DE BOOTSTRAP */}
            <ul class="nav navbar navbar-dark bg-dark justify-content-end ">
            <li class="nav-item">
                <a class="nav-link text-light   " aria-current="page" href="#">INICIO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light " href="#">INFORMACION</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light k" href="#">PRODUCTOS</a>
            </li>   
            <li class="nav-item">{/* A CONTINUACION EL icono cart formando parte de mi navbar */}
                <a class="nav-link text-light k" href="#">
                <CartWidget/>   
                </a>
            </li> 
        </ul>
        

        </div>
        
        
    </nav>
  )
}