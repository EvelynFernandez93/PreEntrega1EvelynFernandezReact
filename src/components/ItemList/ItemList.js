import React from 'react'
import { Link } from 'react-router-dom'


export default function ItemList({ items }) {
  return (
    <div className="constainer-fluid  ">
     <div className="row-col-2 ">
      <div >
        {items.map(item =>(
          <div className="card img-thumbnai-center" key={item.id}   >
            <img src={item.image}  className="card-img-top w-25 p-3 " alt="mostramos la foto del producto ofrecido"></img>
            <div className="card-body text-center">
              <h5 className="card-title text-center" >{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <Link to={`/item/${item.id}/`} className="btn btn-primary">Ver más</Link>
            </div>
            
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
