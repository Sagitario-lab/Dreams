import { Grid2,Divider, Button } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react" 
import colors from "../../assets/Colors";
import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router";
import { ROUTES } from "../../Routes/ROUTES";

export const EventosLista=()=>{
    const [allEvents,setAllEvents]=useState([])
    const navigate=useNavigate()
  
    useEffect(()=>{
        axios.get('http://localhost:3000/events/getAll').then(res => { 
            console.log(res.data)
            setAllEvents(res.data)
        }).catch(err => console.error('Error initializing:', err)); 
    },[])

    return(
        <Grid2 container  display={'flex'} justifyContent={'center'} paddingY={2} >
             <Grid2 size={12} display={'flex'} justifyContent={'center'}  paddingY={2} alignItems={'center'} fontFamily={'Tangerine, serif'} fontSize={'4rem'} fontWeight={700}> 
                Eventos Legion
             </Grid2>
            <Grid2 size={8} minHeight={'calc(100vh - 165.5px)'}>
                {allEvents.length > 0 ? 
                    <Grid2 container  width={'100%'}  spacing={2} >
                        {allEvents.map(data =>{ 
                            return(
                                <Grid2 
                                    size={4}
                                    display={'flex'}
                                    justifyContent={'center'} 
                                    key={data._idx}
                                    bgcolor={`${colors.secondary}`}  
                                    borderRadius={5} 
                                    border={`3px solid ${colors.primary}`}
                                >
                                   <Button onClick={()=>navigate(`/eventos/${data._id}`)}>
                                   <Grid2 container width={'100%'} padding={2} spacing={2}>
                                        <Grid2 
                                            size={12} display={'flex'} justifyContent={'center'}
                                            alignItems={'center'} minHeight={'112px'} textAlign={'center'}
                                             fontSize={'2rem'} color={'black'}
                                        >
                                            {data.title}
                                        </Grid2>

                                        <Divider orientation={"horizontal"}  color={'black'} bgcolor={'black'} width={'100%'}/>
                                        
                                        <Chip variant="contained" color={data.status ? "success" : "warning"} label={data.status ? "Activo" : "Inactivo"}/> 
                                        
                                        <Grid2   
                                            size={12} 
                                            display={'flex'}
                                            justifyContent={'start'}
                                            height={'50px'} 
                                            textOverflow={'ellipsis'}
                                            overflow={'hidden'}
                                            color={'white'}
                                        >
                                            {data.content}
                                        </Grid2>
                                        
                                    </Grid2>
                                   </Button>
                                </Grid2>
                            )
                        })} 
                    </Grid2>
                    :
                    <Grid2 container>
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'2rem'} color={'black'}>
                            No hay parches
                        </Grid2>
                    </Grid2>
                 }
            </Grid2>
        </Grid2>
    )
}