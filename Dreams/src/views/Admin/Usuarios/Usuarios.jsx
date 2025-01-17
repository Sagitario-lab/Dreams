import { Grid2, Button  } from "@mui/material"

export const Usuarios =()=>{
    return(
        <Grid2 container spacing={3}>
             <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>
                    Usuarios
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Crear Usuario
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Eliminar Usuario
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained">
                    Actualizar Usuario
                </Button>
            </Grid2>
        </Grid2>
    )
}