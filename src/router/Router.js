import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from '../components/ItemDetailContainer/ItemDetailContainer';



export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} /> {/* aquí colocamos el componente principal, que queremos ver apenas abrimos nuestra app */}
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailConteiner />} />
      </Routes>
    </BrowserRouter>
  )
}
