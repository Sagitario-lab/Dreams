import { Grid2, Box, Button  } from "@mui/material" 
import { useEffect,useState } from "react"
import axios from 'axios'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";
 

export const UpdatePatchList = () => { 
    const [patchList,sizePatchList]=useState([])
    const [selectedPatch,setSelectedPatch]=useState({})
    const navigate=useNavigate ()

    const getAllPatch=()=>{
        axios.get('http://localhost:3000/patch/getAll').then((res)=>{
            sizePatchList(res.data) 
        })
    }

    useEffect(()=>{
        getAllPatch()
    },[])

    

    return(
        <Grid2 container display={'flex'} justifyContent={'center'}>
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            <Grid2 size={12}>
                <Box component={'h1'} color={'white'} display={'flex'} justifyContent={'center'}>
                    Actualizar parches
                </Box>
            </Grid2>

            <Grid2 size={8}>
                <Grid2 container spacing={2} >
                    {patchList && patchList.map((patch)=>{ 
                        return(
                            <Grid2
                                size={6} 
                                key={patch._id} 
                                display={'flex'} 
                                justifyContent={'center'}
                                alignItems={'center'}  
                                bgcolor={'white'}
                                color={'black'}
                                padding={1}
                            >
                                <Box fontSize={'1.2rem'} marginX={'5px'}>
                                    {patch.patchPost.title}
                                </Box>
                           
                                <Button variant="contained" onClick={()=>navigate(`/adminDashboard/parches/update/${patch._id}`)}>
                                    <UpgradeIcon/>
                                </Button>
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Grid2>
        </Grid2>
    )
}