import { Grid2, Button} from "@mui/material"
import axios from "axios"
import {useEffect, useState} from 'react'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";
export const UpdateShopArticleList =()=>{ 
    const [shopArticlesList,setShopArticlesList]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/shop/getAll').then(res=>setShopArticlesList(res.data))
    },[])


    return(
        <Grid2 container display={'flex'} justifyContent={'center'}> 
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            <Grid2 size={8} display={'flex'} justifyContent={'center'}> 
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                        <h1>
                            Actualualizar articulos lista
                        </h1> 
                    </Grid2>

                    <Grid2 size={12}>
                         <Grid2 container>
                            {shopArticlesList.length > 0 ?
                                <>
                                    {shopArticlesList.map(article=>{
                                        return(
                                            <Grid2
                                                key={article._id}
                                                size={6}  display={'flex'} justifyContent={'center'} border={'2px solid black'} 
                                                bgcolor={'white'}
                                                color='black'
                                                padding={1} 
                                            >     
                                                <Grid2 container width={"100%"} >
                                                    <Grid2 size={6} display={'flex'} justifyContent={'center'} alignItems={'center'}> 
                                                        {article.title}  
                                                    </Grid2>
                                                    <Grid2 size={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                        <Button 
                                                            onClick={()=>{   
                                                                 navigate(`/adminDashboard/tienda/update/${article._id}`)
                                                            }}
                                                            variant="contained" 
                                                        >
                                                            <UpgradeIcon/>
                                                        </Button>
                                                    </Grid2>
                                                </Grid2>
                                            </Grid2>
                                        )
                                    })}
                                </> 
                                :
                                <>
                                    No hay articulos en la tienda existentes.
                                </>
                            }
                         </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}