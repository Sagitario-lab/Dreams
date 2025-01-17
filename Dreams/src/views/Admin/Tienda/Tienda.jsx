import { Grid2, Button  } from "@mui/material"

export const Tienda =()=>{
    return(
        <Grid2 container spacing={3}>
           <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>
                    Tienda
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Crear Articulo
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Eliminar Articulo
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Actualizar Articulo
                </Button>
            </Grid2>
        </Grid2>
    )
}