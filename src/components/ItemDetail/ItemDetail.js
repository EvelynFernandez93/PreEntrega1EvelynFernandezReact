
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({ detail }) {
  
  return (
    
    
   <><div>
      <div className="card mb-3">
        <img  /* src={detail.image}  */  class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">nombre</h5>
          <p className="card-text">detalle</p>
          <p className="card-text"><small class="text-muted">consultar tabla de talles</small></p>
        </div>
      </div>


    </div><div>
        <ItemCount />
      </div>
    </>
  )
}

