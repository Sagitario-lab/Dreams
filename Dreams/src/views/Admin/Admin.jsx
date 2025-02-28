import { Grid2 } from "@mui/material"
import { PatchOptions } from "./Parches/PatchOptions"
import { UsersOptions } from "./Usuarios/UsersOptions" 
import { ShopOptions } from "./Tienda/ShopOptions"
import { EventosOptions } from "./Eventos/EventosOptions"

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
                        <PatchOptions/>
                        <UsersOptions/>
                    </Grid2>
                    <Grid2 size={6} > 
                        <EventosOptions/>
                        <ShopOptions/>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
)
}