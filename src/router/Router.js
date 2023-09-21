import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from '../components/ItemDetailContainer/ItemDetailContainer';
//import { CartProvider } from "../Context/CartContext";

export default function Router() {
  return (
 //<CartProvider >
    <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailConteiner />} />
      </Routes>
    </BrowserRouter>
    //</CartProvider>
  )
}

