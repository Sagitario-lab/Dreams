import { Button , Grid2, Box} from "@mui/material"
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";  
import axios from 'axios'
import Modal from '@mui/material/Modal'; 
import { useState,useEffect  } from "react";  
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


export const DeleteEvent =()=>{ 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [events, setEventsArr]=useState([]) 
    const [selectedEvent,setSelectedEvent]=useState({}) 
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/events/getAll')
        .then(res=>{
            console.log(res.data)
            setEventsArr(res.data)
        })
    },[])

    const deleteEvent=()=>{ 
        axios.delete(`http://localhost:3000/events/delete/${selectedEvent._id}`)
        .then(res=>{
            navigate(ROUTES.adminDashboard)
            handleClose()
        })
    }


    return (
        <Grid2 container bgcolor={'gray'} spacing={1} display={'flex'} justifyContent={'center'}>
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>
                    Atrás
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>Lista de eventos a Borrar </h1>
            </Grid2>
             
            <Grid2 size={8} >
                <Grid2 container display={'flex'} justifyContent={'center'} spacing={2}>

                    {events.length > 0 ? 
                        events.map(event =>{
                            return(
                                <Grid2 size={6} key={event._id} display={'flex'} justifyContent={'center'}  bgcolor={'white'} color='black' alignItems={'center'}>
                                    <Box>
                                        {event.title}
                                    </Box>
                                    <Box>
                                        <Button 
                                            variant="contained"
                                            color="error"
                                            onClick={()=>{
                                                setSelectedEvent(event)
                                                handleOpen()
                                            }}
                                        >
                                            <DeleteForeverIcon />    
                                        </Button>
                                    </Box> 
                                </Grid2>
                            )
                        })
                        :
                        <>no hay eventos</>
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
                            Estas seguro que desea eliminar el evento:
                        </Grid2>
                        <Grid2 size={12} display={'flex'} justifyContent={'center'} fontFamily={'Roboto'} fontSize={'2rem'}>
                            {selectedEvent?.title}  
                        </Grid2>
                        <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                            <Button onClick={deleteEvent} variant="contained">SI</Button>
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