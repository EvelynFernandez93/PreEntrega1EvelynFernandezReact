import React from 'react'
import { useState } from 'react'

export default function ItemCount() {
    const [cont, setCont] = useState(1)

    const agregarUnidad = () => {
        setCont(cont + 1)
    }

    const restarUnidad = () => {
        (cont > 0) && setCont(cont - 1)
    }

  return (
    <div>
        <button onClick={restarUnidad} className="btn btn-secondary btn-sm">-</button>
        <span className="btn btn-secondary btn-sm">{cont}</span>
        <button onClick={agregarUnidad} className="btn btn-secondary btn-sm">+</button>
    </div>
  )
}
