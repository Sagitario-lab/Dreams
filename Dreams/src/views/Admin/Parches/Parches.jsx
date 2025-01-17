import { Grid2, Button  } from "@mui/material"
import { useNavigate } from "react-router"
import { ROUTES } from "../../../Routes/ROUTES"


export const Parches=()=>{

    const navigation=useNavigate()

    return(
        <Grid2 container spacing={3}>
            <Grid2 size={12}  display={'flex'} justifyContent={'center'}>
                <h1>
                    Parches
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigation('/adminDashboard/parches/create')}>
                    Crear Parche
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigation(ROUTES.deleteParche)}>
                    Eliminar Parche
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigation(ROUTES.updateParche)}>
                    Actualizar Parche
                </Button> 
            </Grid2>
        </Grid2>
    )
}