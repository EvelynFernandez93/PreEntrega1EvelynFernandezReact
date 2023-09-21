 /* import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const totalProducto = cart.reduce((total, producto) => total + producto.quantity, 0)

    const addProducto = (producto, quantity) => {
        if (!isInCart(producto.id)) {
            setCart(prev => [...prev, { ...producto, quantity }])
        } else {
            setCart(prev => {
                const updatedCart = prev.map(item => {
                    if (item.id === producto.id) {

                        return { ...item, quantity: item.quantity + quantity }
                    }
                    return item
                })
                return updatedCart
            })
        }
    }

    const removeProduct = (productoId) => {
        const cartUpdate = cart.filter(prod => prod.id !== productoId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productoId) => {
        return cart.some(prod => prod.id === productoId)
    }


    return (
        <CartContext.Provider value={{ cart, totalProducto, addProducto, removeProducto, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}  */

/* import { createContext } from "react";


export const CartContext = createContext(); */
import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (producto, cont ) =>{
      const productoAgregado = {...producto, cont};
  
      const nuevoCarrito = [...carrito];
      const estaEnElCarrito = nuevoCarrito.find((item) => item.id === productoAgregado.id);
  
      if (estaEnElCarrito) {
          estaEnElCarrito.cont += cont;
      }else{
          nuevoCarrito.push(productoAgregado)
      }
      setCarrito(nuevoCarrito);
   }
    
   /* const cantidadEnCarrito = () =>{
      return carrito.reduce((acc, prod)) => acc + prod.cont, 0);
   } */
    return (
        <CartContext.Provider value= { {carrito, agregarAlCarrito} }>
            {children}
        </CartContext.Provider>
    )
}