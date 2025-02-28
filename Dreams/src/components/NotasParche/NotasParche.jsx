import { Grid2 } from "@mui/material"
import { Card } from './Card.jsx'
import { useEffect } from "react"
import axios from "axios"
import colors from "../../assets/Colors.js"
import descarga from '../../assets/descarga.png'

export const NotasParche = ({ parches = [] }) => {


    return (
        <Grid2 container display={'flex'} justifyContent={'center'} padding={2} sx={{
            backgroundImage: `url("${descarga}")`,
        }} >
            <Grid2 size={8} >
                <Grid2 container spacing={2}>
                    {parches.length > 0 && parches?.map((data) => {
                        return (
                            <Grid2 size={4} display={'flex'} justifyContent={'center'} color={colors.fifth}>
                                <Card fecha={data.day} idx={data._id} notas={data.content} titulo={data.title} />
                            </Grid2>
                        )
                    }
                    )}
                </Grid2>
            </Grid2>
        </Grid2>
    )
}