import ItemCount from '../ItemCount/ItemCount'
//import { useContext, useState } from 'react'
//import { CartContext } from '../../context/CartContext'


export default function ItemDetail({producto}) {
  
  return (
    
    
   <><div>
      <div className="card mb-3">
        <img src={producto.image} className="card-img-top w-25 p-3" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">{producto.description}</p>
          <p className="card-text"><small className="text-muted">consultar tabla de talles</small></p>
        </div>
      </div>
    </div><div>
        <ItemCount />
      </div></>
    
  )
}

