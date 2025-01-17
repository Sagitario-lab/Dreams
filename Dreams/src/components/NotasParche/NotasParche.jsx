import { Button, Grid2 } from "@mui/material"
import {Card} from './Card.jsx'
import { useEffect } from "react"

export const NotasParche =({parches=[]})=>{
    useEffect(()=>{
        console.log('Parches:',parches)
    },[])
    return(
        <Grid2 container display={'flex'} justifyContent={'center'}>
            <Grid2 component={'h1'} size={12} display={'flex'} justifyContent={'center'} color={'white'}> Notas Parche uwu</Grid2>
            <Grid2 size={8}>
                <Grid2 container spacing={2}>
                    {parches.length > 0 && parches?.map((data)=> data && <Card fecha={data.patchPost.day} idx={data._id} notas={data.patchPost.content} titulo={data.patchPost.title} />)}
                </Grid2>
            </Grid2>
        </Grid2>
    )
}