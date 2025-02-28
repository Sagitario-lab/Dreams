import { Grid2, Button  } from "@mui/material"
import { useNavigate } from "react-router"

export const EventosOptions =()=>{
    const navigate=useNavigate()

    return(
        <Grid2 container spacing={3}>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>
                    Eventos
                </h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate('/adminDashboard/eventos/create')}>
                    Crear Evento
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate('/adminDashboard/eventos/delete')}>
                    Eliminar Evento
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>navigate('/adminDashboard/eventos/update')}>
                    Actualizar Evento
                </Button>
            </Grid2>
        </Grid2>
    )
}