import { Grid2, Button  } from "@mui/material"

export const Eventos=()=>{
    return(
        <Grid2 container spacing={3}>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>
                    Eventos
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Crear Evento
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Eliminar Evento
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Actualizar Evento
                </Button>
            </Grid2>
        </Grid2>
    )
}