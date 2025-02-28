import { useEffect,useState } from "react"
import axios from 'axios'
import { Grid2, Box, Button  } from "@mui/material" 
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Modal from '@mui/material/Modal';
import { ROUTES } from "../../../../Routes/ROUTES";
import { useNavigate } from "react-router";

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

export const DeletePatch=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [patchList,sizePatchList]=useState([])
    const [selectedPatch,setSelectedPatch]=useState({})
    const navigate=useNavigate()

    const getAllPatch=()=>{
        axios.get('http://localhost:3000/patch/getAll').then((res)=>{
            sizePatchList(res.data) 
        })
    }

    useEffect(()=>{
        getAllPatch()
    },[])

    const deletePatch=()=>{ 
        axios.delete(`http://localhost:3000/patch/delete/${selectedPatch._id}`).then((res)=>{ 
            handleClose()
            getAllPatch()
        })
    }

    return(
        <Grid2 container style={{color:'white'}} display={'flex'} justifyContent={'center'}> 
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            <Grid2 size={8} >
                <Grid2 container spacing={2}>
                    {patchList && patchList.map((patch)=>{
                        return(
                            <Grid2 size={6} key={patch._id}>
                                 <Grid2 
                                    container 
                                    bgcolor={'white'}
                                    display={'flex'}
                                    justifyContent={'start'}
                                    borderRadius={'10px'}
                                    padding={1}
                                >
                                    <Grid2
                                        size={10} 
                                        key={patch._id} 
                                        display={'flex'}
                                        justifyContent={'start'}
                                        fontSize={'2rem'}
                                        color={'black'} 
                                    >
                                        {patch.patchPost.title}
                                    </Grid2>
                                    <Grid2 size={2}>
                                        <Button 
                                            onClick={()=>{
                                                setSelectedPatch(patch)
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
                            Estas seguro que desea eliminar el parche:
                        </Grid2>
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} fontFamily={'Roboto'} fontSize={'2rem'}>
                            {selectedPatch?.patchPost?.title}  
                        </Grid2>
                        <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                            <Button onClick={deletePatch} variant="contained">SI</Button>
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