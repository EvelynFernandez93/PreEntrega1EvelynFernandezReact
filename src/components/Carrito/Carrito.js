import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2  className="card-title">Precio total: ${precioTotal()}</h2>
                <br />
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleVaciar}>Vaciar</button>
                <br />
                <br />
                <Link type="button" className="btn btn-secondary btn-sm" to="/checkout">Finalizar compra</Link>
            </> :
            <h2  className="alert alert-danger" role="alert">El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Carrito