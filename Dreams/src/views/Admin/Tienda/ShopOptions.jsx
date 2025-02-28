import { Grid2, Button  } from "@mui/material"
import { useNavigate } from "react-router"
import { ROUTES } from "../../../Routes/ROUTES"

export const ShopOptions =()=>{
    const nagivate=useNavigate()
    return(
        <Grid2 container spacing={3}>
           <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>
                    Tienda
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>nagivate(ROUTES.createShopArticle)}>
                    Crear Articulo
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>nagivate(ROUTES.deleteShopArticle)}>
                    Eliminar Articulo
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>nagivate(ROUTES.updateShopArticle)}>
                    Actualizar Articulo
                </Button>
            </Grid2>
        </Grid2>
    )
}