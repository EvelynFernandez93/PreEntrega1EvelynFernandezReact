import React from 'react'
import { useParams , Link} from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function ItemListContainer() {
  const [items, setItems] = useState ([])
  const {id} = useParams()

  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/data/products.json')
      const products = await response.json()
  
      const filteredProducts = products.filter(product => product.category === id)
      
      if(filteredProducts.length > 0) return setItems (filteredProducts)
      

      setItems(products)
    }
  
    getProducts()
  }, [id])

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
              <Link to={'/item/${item.id}/'} className="btn btn-primary">Ver más</Link>
            </div>
            
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
