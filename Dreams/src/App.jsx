import { Routes, Route } from "react-router";
import './index.css'
import { ROUTES } from './Routes/ROUTES.js';
import { Menu } from './views/Menu/Menu.jsx';
import { Tienda } from './views/Tienda/Tienda.jsx';
import { Producto } from './views/Tienda/Producto.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Login } from './views/Login/Login.jsx';
import { Admin } from './views/Admin/Admin.jsx';
import { UpdatePatchList } from './views/Admin/Parches/Update/UpdatePatchList.jsx'
import { CreatePatch } from './views/Admin/Parches/Create/CreatePatch.jsx';
import { DeletePatch } from './views/Admin/Parches/Delete/DeletePatch.jsx';
import { UpdatePatch } from './views/Admin/Parches/Update/UpdatePatch.jsx';
import { CreateShopArticle } from './views/Admin/Tienda/Create/CreateShopArticle.jsx';
import { Grid2 } from "@mui/material";
import { NavBar } from './components/Navbar.jsx';
import { AllPatchs } from "./views/Patchs/AllPatchs.jsx";
import { DeleteShopArticle } from "./views/Admin/Tienda/Delete/DeleteShopArticle.jsx";
import { UpdateShopArticleList } from "./views/Admin/Tienda/Update/UpdateShopArticleList.jsx";
import { UpdateShopArticle } from "./views/Admin/Tienda/Update/UpdateShopArticle.jsx";
import { CreateEvent } from "./views/Admin/Eventos/Create/CreateEvent.jsx";
import { DeleteEvent } from "./views/Admin/Eventos/Delete/DeleteEvent.jsx";
import { UpdateEventsList } from "./views/Admin/Eventos/Update/UpdateEventsList.jsx";
import { UpdateEvent } from "./views/Admin/Eventos/Update/UpdateEvent.jsx";
import { SelectedPatch } from "./views/Patchs/SelectedPatch.jsx";
import colors from "./assets/Colors.js";
import { EventosLista } from "./views/Eventos/EventosLista.jsx";
import { Evento } from "./views/Eventos/Evento.jsx";
import { Registro } from "./views/Registro/Registro.jsx";

function App() {

  return (
    <div>
      <Grid2 container color={'white'} sx={{ background: `linear-gradient(45deg, ${colors.third}, ${colors.secondary})`, }}>
        <Grid2 size={12} position={'sticky'} top={0} zIndex={1}>
          <NavBar />
        </Grid2>

        <Grid2 size={12}>
          <Routes>
            <Route path="*" element={<h1>404</h1>} />
            <Route path={ROUTES.menu} element={<Menu />} />
            <Route path={ROUTES.patchView} element={<SelectedPatch />} />
            <Route path={ROUTES.allPatchs} element={<AllPatchs />} />
            <Route path={ROUTES.tienda} element={<Tienda />} />
            <Route path={ROUTES.producto} element={<Producto />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.eventos} element={<EventosLista />} />
            <Route path={ROUTES.evento} element={<Evento />} />
            <Route path={ROUTES.registro} element={<Registro />} />

            <Route path={ROUTES.adminDashboard} element={<Admin />} />

            <Route path={ROUTES.createPatch} element={<CreatePatch />} />
            <Route path={ROUTES.deletePatchList} element={<DeletePatch />} />
            <Route path={ROUTES.updatePatch} element={<UpdatePatchList />} />
            <Route path={ROUTES.updateSelectedPatch} element={<UpdatePatch />} />

            <Route path={ROUTES.createShopArticle} element={<CreateShopArticle />} />
            <Route path={ROUTES.deleteShopArticle} element={<DeleteShopArticle />} />
            <Route path={ROUTES.updateShopArticle} element={<UpdateShopArticleList />} />
            <Route path={ROUTES.updateSelectedShopArticle} element={<UpdateShopArticle />} />

            <Route path={ROUTES.createEvent} element={<CreateEvent />} />
            <Route path={ROUTES.deleteEvent} element={<DeleteEvent />} />
            <Route path={ROUTES.updateEvent} element={<UpdateEventsList />} />
            <Route path={ROUTES.updateSelectedEvent} element={<UpdateEvent />} />
          </Routes>
        </Grid2>

        <Grid2 size={12}>
          <Footer />
        </Grid2>
      </Grid2>
    </div>

  )
}

export default App
