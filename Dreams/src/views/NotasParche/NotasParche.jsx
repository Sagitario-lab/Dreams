import { Grid2 } from "@mui/material"
import { Card } from "../../components/NotasParche/Card"
import { useEffect, useState } from "react"
import axios from "axios"

export const NotasParche=({parches=[]})=>{

    const [parchesLista, setParchesLista] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/adminDashboard/parches/get').then(res => {
                setParchesLista(res.data);
            })
            .catch(err => console.error('Error fetching parches:', err));
    }, []);

    return(
        <Grid2 container display={'flex'} justifyContent={'center'}>
            <Grid2
                component={'h1'}
                size={12}
                display={'flex'} 
                justifyContent={'center'} 
                color={'white'}
            >
                Notas del Parche
            </Grid2> 
        
            <Grid2 size={8}>
                <Grid2 container spacing={2}>
                    {parchesLista.length > 0 && parchesLista?.map((data,idx)=> data &&  <Card titulo={data.patchPost.title} fecha={data.patchPost.day} notas={data.patchPost.content} idx={data._id}/>)}
                </Grid2>
            </Grid2>
        </Grid2> 
    )
}