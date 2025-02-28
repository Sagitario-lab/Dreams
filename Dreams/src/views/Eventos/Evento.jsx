import { Button, Box, Grid2,Divider,Chip } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import colors from "../../assets/Colors"
import { ROUTES } from "../../Routes/ROUTES"


export const Evento=()=>{
    const {id}= useParams()
    const [evento,setEvento]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/events/get/${id}`).then(res => {
            setEvento(res.data)
        })
    },[])

    return(
        <Grid2 container display={'flex'} justifyContent={'center'} padding={2}> 
            <Grid2 size={10}>
                <Button variant="contained"  color={colors.fifth} onClick={()=>navigate(ROUTES.eventos)}>
                    Regresar
                </Button>
            </Grid2>
            <Grid2 size={8}>
                {evento && 
                    <Grid2 container spacing={2}>
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} fontFamily={'Tangerine, serif'} fontSize={'4rem'} fontWeight={700}>
                            {evento.title}
                        </Grid2>

                        <Grid2 size={12}>
                            <Chip variant="contained" color={evento?.status ? "success" : "warning"} label={evento.status ? "Activo" : "Inactivo"}/> 
                        </Grid2>

                        <Divider orientation={"horizontal"}  color={'black'} bgcolor={'black'} width={'100%'} />

                        <Grid2 size={12} bgcolor={'rgba(0,0,0,0.2)'} padding={2} borderRadius={5}> 
                            <Box dangerouslySetInnerHTML={{__html: evento?.content}}></Box>
                        </Grid2>
                    </Grid2>
                }
            </Grid2> 
        </Grid2>   
    )
}