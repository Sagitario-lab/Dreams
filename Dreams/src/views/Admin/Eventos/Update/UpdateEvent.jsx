import { Box, Grid2, Button, TextField, MenuItem, Select, InputLabel} from "@mui/material"
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import  { useState, useEffect } from 'react';  
import { useParams,useNavigate } from 'react-router';
import axios from 'axios' 
import { ROUTES } from "../../../../Routes/ROUTES"; 

export const UpdateEvent =()=>{
    const {id}=useParams()
    const [event, setEvent]=useState({title:'', content:'', status: true, img:''})
    const navigate=useNavigate()

    const updatePatch=()=>{
        const { _id, ...updatedEventData } = event;
        console.log(updatedEventData)
        axios.put(`http://localhost:3000/events/update/${event._id}`,updatedEventData)
        .then(res=>navigate('/adminDashboard'))
    }

    const handleChange = (e) => {
        setEvent({...event, status: e.target.value});
    };
     
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/get/${id}`).then(res=>{ 
            console.log(res.data)
            setEvent(res.data) 
        })
    },[id])

    let modules={
        toolbar: [
          // Font & Size
          [{ font: [] }, { size: [] }],
          // Text Formatting
          ["bold", "italic", "underline", "strike"],
          // Text Alignment
          [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
          // Text Color & Background Color
          [{ color: [] }, { background: [] }],
          // Superscript / Subscript
          [{ script: "sub" }, { script: "super" }],
          // Lists
          [{ list: "ordered" }, { list: "bullet" }],
          // Indentation
          [{ indent: "-1" }, { indent: "+1" }],
          // Direction
          [{ direction: "rtl" }],
          // Code & Blockquote
          ["code-block", "blockquote"],
          // Links & Media
          ["link", "image", "video"],
          // Clean formatting
          ["clean"],
        ],
    }

    return(
        <Grid2 container color={'white'} display={'flex'} justifyContent={'center'} bgcolor={'gray'}>
            
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
            
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Box component={'h1'}>
                    Actualizar {event?.title}
                </Box>
                <Box>
                    <Button onClick={()=>{
                        updatePatch()
                        console.log(event)
                    }}>
                        Guardar
                    </Button> 
                </Box>
            </Grid2>

            <Grid2 size={8} display={'flex'} justifyContent={'center'}> 
                <TextField id="outlined-basic" label={event?.title === '' ? 'Título' : event?.title} variant="outlined"
                    onChange={(e)=>setEvent({...event, title: e.target.value})} 
                />
            </Grid2>

            <Grid2 size={8} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                <InputLabel id="demo-simple-select-label" >Estado</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={event.status}
                    label="Estado del eventoo"
                    onChange={handleChange} 
                >
                    <MenuItem value={true}>Activo</MenuItem>
                    <MenuItem value={false}>Inactivo</MenuItem> 
                </Select>
            </Grid2>

            <Grid2 size={8}>
                <ReactQuill
                    theme="snow"
                    value={event.content}
                    onChange={(content) => setEvent((prev) => ({
                        ...prev,
                        content: content, 
                    }))} 
                    modules={modules}
                />
            </Grid2>
        </Grid2>
    )
}