import { Grid2, Box, Divider, Button } from "@mui/material"
import '../../index.css'
import { useNavigate } from "react-router"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

export const Tienda = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/shop/getAll')
            .then(res => setProductos(res.data.reverse()))
            .catch(err => console.log(err))
        //poner query paramas para el paginado
    }, [])


    const navigate = useNavigate()

    return (
        <Grid2 container display={'flex'} justifyContent={'center'} padding={4} style={{ minHeight: 'calc(100vh - 50px)' }}>
            <Grid2 size={10}>
                <Grid2 container spacing={4} >
                    {productos.length > 0 &&
                        productos.map((data) => {
                            return (
                                <Grid2
                                    size={4}
                                    bgcolor={'#1A161C'}
                                    key={data._id}
                                    display={'flex'}
                                    justifyContent={'center'}
                                >
                                    <Button onClick={() => navigate(`/tienda/${data._id}`)} width='100%'>
                                        <Grid2 container>
                                            <Grid2 size={12}>
                                                <Box
                                                    component='img'
                                                    src={data.imagen}
                                                    alt="Imagen-del-Articulo"
                                                    width={'100%'}
                                                    height={'300px'}
                                                ></Box>
                                            </Grid2>

                                            <Grid2 size={12} >

                                                <Box
                                                    fontSize={'2.5rem'} fontFamily={'cursive'}
                                                    color={'white'} display={'flex'} justifyContent={'center'}
                                                    overflow={'hidden'}
                                                >
                                                    {data.title}
                                                </Box>
                                                <Box
                                                    fontSize={'2rem'} color={'gray'}
                                                    display={'flex'} justifyContent={'center'}>
                                                    ${data.price}
                                                </Box>
                                                <Divider />
                                                <Box
                                                    height={'150px'} color={'white'} bgcolor={'red'}
                                                    overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}
                                                    class='multilineTruncate'
                                                >
                                                    {data.description}
                                                </Box>
                                            </Grid2>
                                        </Grid2>
                                    </Button>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </Grid2>
        </Grid2 >
    )
}