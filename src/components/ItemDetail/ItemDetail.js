
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
// import { CartContext } from '../../context/CartContext'

export default function ItemDetail({ producto }) {
  const {carrito,agregarAlCarrito} = useContext(CartContext);
  console.log (carrito);

  const [cont, setCont] = useState(1);

  /* const sumarUnidad = () => {
    if (cont < producto.stock) {
      setCont(cont + 1);
    }
  } */
  const sumarUnidad = () => {
    cont < producto.stock && setCont (cont + 1)
}

  const restarUnidad = () => {
    cont > 1 && setCont (cont - 1)
  }




  return (
    <>
      <div>
        <div className="card mb-3">
          <img src={producto.image} className="card-img-top w-25 p-3" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.description}</p>
            <p className="card-text"><small className="text-muted">consultar tabla de talles</small></p>
          </div>
          <div>
            <button onClick={restarUnidad} className="btn btn-secondary btn-sm">-</button>
            <span className="btn btn-secondary btn-sm">{cont}</span>
            <button onClick={sumarUnidad} className="btn btn-secondary btn-sm">+</button>
            <div>
              <button onClick={() => {agregarAlCarrito(producto, cont)}} className="btn btn-secondary btn-sm">Agregar</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}