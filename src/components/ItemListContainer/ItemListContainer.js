import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'



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
   
    <div>
     <ItemList items={items} />
    </div>
  )
}
