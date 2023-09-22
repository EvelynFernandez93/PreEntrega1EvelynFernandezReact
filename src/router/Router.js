import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from '../components/NavBar/NavBar'



import {  CartProvider } from "../Context/CartContext";
import Contacto from "../components/Contacto/Contacto";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "../components/Checkout/Checkout";
import Carrito from "../components/Carrito/Carrito";

export default function Router() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/checkout" element={<Checkout />}/>
         
          
          
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

