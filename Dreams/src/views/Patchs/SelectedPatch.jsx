import { Box, Grid2 } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const SelectedPatch=()=>{ 
    const [selectedPatch,setSelectedPatch]=useState({})
    const {id}=useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/patch/get/${id}`).then(res => {
            console.log(res.data)
            setSelectedPatch(res.data)
        }).catch(err => console.error('Error fetching parches:', err));
    },[])

    return(
        <Grid2 container  display={'flex'} justifyContent={'center'} paddingY={2}> 
            <Grid2 size={12} display={'flex'} justifyContent={'center'} fontSize={'3.7rem'}>
                {selectedPatch?.title}
            </Grid2>
            <Grid2 size={8}   bgcolor={'rgba(0,0,0,0.6)'} padding={2} borderRadius={5} marginTop={2} color={'white'}> 
                <Box dangerouslySetInnerHTML={{__html: selectedPatch?.content}}></Box>
            </Grid2>
        </Grid2>
    )
}   