import { Button, Grid2, Box } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { ROUTES } from "../../../../Routes/ROUTES";
import { useNavigate } from "react-router";

export const UpdateEventsList =()=>{
    const [events,setEvents] = useState([])
    const navigate=useNavigate ()

    useEffect(()=>{
        axios.get('http://localhost:3000/events/getAll')
        .then(res=>setEvents(res.data))
    })

    return(
        <Grid2 container  bgcolor={'gray'} display={'flex'} justifyContent={'center'}> 
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            <Grid2 display={'flex'} justifyContent={'center'} size={12}>
                <h1>
                    Actualizar eventos
                </h1>
            </Grid2>
            <Grid2 size={8} display={'flex'} justifyContent={'center'} >
                <Grid2 container spacing={2} display={'flex'} justifyContent={'center'}>
                    {events.length > 0 ?
                        events.map(event=>{
                            return(
                                <Grid2 size={6} key={event._id} padding={2} display={'flex'}  alignItems={'center'} color={'black'} bgcolor={'white'}>
                                    <Box>
                                        {event.title}
                                    </Box>
                                    <Button variant="contained" onClick={()=>navigate(`/adminDashboard/eventos/update/${event._id}`)}>
                                        <UpgradeIcon/>
                                    </Button>
                                </Grid2>
                            )
                        })
                        :
                        <Grid2 size={12}>No hay eventos existentes para actualizar</Grid2>
                    }
                </Grid2>
            </Grid2>
        </Grid2>
    )
}