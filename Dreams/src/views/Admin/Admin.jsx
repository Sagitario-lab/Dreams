import { Grid2, Button  } from "@mui/material"
import { Parches } from "./Parches/Parches"
import { Usuarios } from "./Usuarios/Usuarios"
import { Eventos } from "./Eventos.jsx/Eventos"
import { Tienda } from "./Tienda/Tienda"

export const Admin=()=>{
    return(
        <Grid2 container display={'flex'} justifyContent={'center'} color={'white'}  height={'calc(100vh - 134.72px)'}> 
            <Grid2 size={10}>   
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                        <h1>
                            Panel de administración
                        </h1>
                    </Grid2>
                </Grid2>
                <Grid2 container display={'flex'} justifyContent={'center'}>
                    <Grid2 size={6}>
                        <Parches/>
                        <Usuarios/>
                    </Grid2>
                    <Grid2 size={6} > 
                        <Eventos/>
                        <Tienda/>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
)
}