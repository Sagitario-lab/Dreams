import { Grid2 } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../../components/NotasParche/Card";
import LazyLoad from 'react-lazyload';

export const AllPatchs = () => {
    const [allPatchs, setAllPatchs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/patch/getAll').then(res => {
            setAllPatchs(res.data)
        }).catch(err => console.error('Error initializing:', err));
    }, [])

    return (
        <Grid2 container display={'flex'} justifyContent={'center'} paddingY={2} >
            <Grid2 size={12} display={'flex'} justifyContent={'center'} paddingY={2} alignItems={'center'} fontFamily={'Tangerine, serif'} fontSize={'4rem'} fontWeight={700}>
                Parches Legion
            </Grid2>
            <Grid2 size={8} minHeight={'calc(100vh - 165.5px)'}>
                {allPatchs.length > 0 ?
                    <Grid2 container width={'100%'} spacing={2} >
                        {allPatchs.map(data => {
                            return (
                                <Grid2 size={4} key={data._id}>
                                    <LazyLoad height={200}>
                                        <Card fecha={data.day} idx={data._id} notas={data.content} titulo={data.title} />
                                    </LazyLoad>
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