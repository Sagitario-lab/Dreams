import { Box,  Grid2, Button } from "@mui/material"
import { useNavigate, useParams } from "react-router"
import {useState , useEffect} from 'react'
import axios from "axios" 

export const Producto=()=>{
    const {id} = useParams() 
 

    const [producto, setProducto] = useState(null)

    useEffect(()=>{ 
        console.log(id)
        axios.get(`http://localhost:3000/shop/get/${id}`)
        .then(res=>{
            console.log(res.data)
            setProducto(res.data)
        })

    },[])

  

    return(
        <Grid2>
            <Grid2 size={12}>
                {producto &&  
                    <Grid2 container display='flex' justifyContent={'center'} >
                        <Grid2 size={10}>
                            <Grid2 container spacing={3} display={'flex'} justifyContent={'center'} padding={2} >
                                <Grid2 size={12} display='flex' justifyContent='center' > 
                                    <Box component={'img'} src={producto?.imagen} alt="product-img" border={'1px solid gray'} width={'100%'}></Box>
                                </Grid2>
                                <Grid2 size={12} fontSize={'3.5rem'} fontFamily={'cursive'}  display='flex' justifyContent='center'>
                                    {producto?.title} - ${producto?.price}
                                </Grid2>
                                <Grid2 size={12} fontSize={'1.5rem'} fontFamily={'cursive'}>
                                    {producto?.description}
                                </Grid2>
                                <Grid2 display={'flex'} justifyContent={'center'}  fontSize={'1.2rem'}>
                                    <div dangerouslySetInnerHTML={{__html: producto?.content}}></div>
                                </Grid2>
                                <Grid2 size={12} display={'flex'} justifyContent={'center'} >
                                    <a href={producto?.link} target="_black">
                                        <Button color="primary" variant={'contained'} style={{fontSize:'2rem'}} type="link" href={producto?.link} target="_blank">  
                                                Comprar
                                        </Button>
                                    </a>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                }
            </Grid2>
        </Grid2>
    )
}