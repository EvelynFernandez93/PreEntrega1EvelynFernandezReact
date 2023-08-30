import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function ItemDetailConteiner() { 
  const [detailProduct, setDetailProduct] = useState ({})
  const  id  = useParams ()

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch('/data/products.json')
      const products = await response.json()
  
      const filteredProduct = products.find(product => product.id === parseInt(id))
      
  
      setDetailProduct(filteredProduct)
    }

    getProduct()

  }, [id])

  return (
    <div className='container'>
      <ItemDetail  detail={detailProduct} />
    </div>
  )
}
