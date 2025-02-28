import { Grid2, Button  } from "@mui/material"
import { useNavigate } from "react-router"
import { ROUTES } from "../../../Routes/ROUTES"


export const PatchOptions=()=>{

    const navigate=useNavigate()

    return(
        <Grid2 container spacing={3}>
            <Grid2 size={12}  display={'flex'} justifyContent={'center'}>
                <h1>
                    Parches
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.createPatch)}>
                    Crear Parche
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.deletePatchList)}>
                    Eliminar Parche
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.updatePatch)}>
                    Actualizar Parche
                </Button> 
            </Grid2>
        </Grid2>
    )
}