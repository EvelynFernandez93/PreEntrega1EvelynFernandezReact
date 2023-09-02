import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function ItemDetailConteiner() { 
  const [product, setProduct] = useState ({})
  const  {id}  = useParams ()

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch('/data/products.json')
      const products = await response.json()
  
      const findProduct = products.find(product => product.id === parseInt(id))
      
  
      setProduct(findProduct)
    }

    getProduct()

  }, [id])

  return (
    <div >
      <ItemDetail  producto={product} />
    </div>
  )
}
