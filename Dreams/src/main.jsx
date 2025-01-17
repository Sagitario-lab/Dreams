import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css' 
import { ROUTES } from './Routes/ROUTES.js';
import { NavBar } from './components/NavBar.jsx';
import { Menu } from './views/Menu/Menu.jsx';
import { NotasParche } from './views/NotasParche/NotasParche.jsx';
import { Tienda } from './views/Tienda/Tienda.jsx';
import { Producto } from './views/Tienda/Producto.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Login } from './views/Login/Login.jsx';
import { Admin } from './views/Admin/Admin.jsx';
import { Type} from  './views/Admin/Parches/Type.jsx'
 

 

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path={ROUTES.menu} element={<Menu/>} />
      <Route path={ROUTES.parche} element={<NotasParche/>} />
      <Route path={ROUTES.producto} element={<Producto/>} />
      <Route path={ROUTES.tienda} element={<Tienda />} />
      <Route path={ROUTES.login} element={<Login/>} />
      <Route path={ROUTES.adminDashboard} element={<Admin/>} />
      <Route path={ROUTES.typeParche} element={<Type/>} />

      

    </Routes>
    <Footer/>
  </BrowserRouter>
  </StrictMode>
)
