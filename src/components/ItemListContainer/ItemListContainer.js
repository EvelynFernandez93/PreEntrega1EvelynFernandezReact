import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const productoRef = collection(db, "producto");

      const q = categoria ? query(productoRef, where("categoria", "==", categoria)) : productoRef;

      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        setTitulo("Colección 2023");
    }, [categoria])
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer