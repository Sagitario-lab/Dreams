import { Grid2, Box, Button } from "@mui/material"
import axios from "axios" 
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { ROUTES } from "../../../../Routes/ROUTES"
import Modal from '@mui/material/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const DeleteShopArticle=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [articles,setArticles]=useState([])
    const [selectedArticle,setSelectedArticle]=useState([])

    const navigate=useNavigate()

    const getAllArticles=()=>{
        axios.get('http://localhost:3000/shop/getAll')
            .then(res=>{
                    setArticles(res.data)
                }
            )
    }

    useEffect(()=>{
        getAllArticles()
    },[])

    const deleteArticle=()=>{ 
        axios.delete(`http://localhost:3000/shop/delete/${selectedArticle._id}`)
            .then(res=>{ 
                handleClose()
                getAllArticles()
                navigate(ROUTES.adminDashboard)
            })
    }

    return(
        <Grid2 container display={'flex'} justifyContent={'center'}> 
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            <Grid2 size={12}>
                <Box component={'h1'} textAlign={'center'}>Borrar articulo</Box>
            </Grid2>
            <Grid2 size={8} >
                <Grid2 container spacing={2}>
                    {articles.length > 0 ?
                    <>
                        {articles.map(art=>{
                            console.log(art)
                            return(
                                <Grid2
                                    key={art._id}
                                    size={6}  display={'flex'} justifyContent={'center'} border={'2px solid black'} 
                                    bgcolor={'white'}
                                    color='black'
                                    padding={1} 
                                >     
                                    <Grid2 container width={"100%"} >
                                        <Grid2 size={6} display={'flex'} justifyContent={'center'} alignItems={'center'}> 
                                            {art.title}  
                                        </Grid2>
                                        <Grid2 size={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <Button 
                                                onClick={()=>{ 
                                                    setSelectedArticle(art)
                                                    handleOpen()
                                                }}
                                            >
                                                <DeleteForeverIcon  color="error" /> 
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            )
                        })}
                    </> 
                    : 
                    <>
                        No hay articulos disponibles para borrar.
                    </>
                    }
                </Grid2>
            </Grid2>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid2 container spacing={2} >
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} fontSize={'2.1rem'} textAlign={'center'}>
                            Estas seguro que desea eliminar el Articulo:
                        </Grid2>
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} fontFamily={'Roboto'} fontSize={'2rem'}>
                            {selectedArticle?.title}  
                        </Grid2>
                        <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                            <Button onClick={deleteArticle} variant="contained">SI</Button>
                        </Grid2>
                        <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                            <Button onClick={handleClose} variant="contained">NO</Button>
                        </Grid2>
                    </Grid2>
                </Box>
            </Modal>
        </Grid2>
    )
}