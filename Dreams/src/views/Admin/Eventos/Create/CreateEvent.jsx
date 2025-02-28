import { Button, InputLabel , Grid2, TextField, MenuItem, Select, Box} from "@mui/material"
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useState  } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'


export const CreateEvent =()=>{ 
    const [evento,setEvento]=useState({
        title:'', 
        content:'',
        imagen:'',
        status: false
    }) 
    const handleChange = (e) => {
        setEvento({...evento, status: e.target.value});
    };
    const navigate=useNavigate()

    let modules = {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          ["code-block", "blockquote"],
          ["link", "image", "video"],
          ["clean"],
        ],
      };

    const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
    })

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setEvento({ ...evento, imagen: URL.createObjectURL(file) })
        const reader = new FileReader()
        reader.onloadend = () => {
            setEvento({ ...evento, imagen: reader.result })
        }
        reader.readAsDataURL(file)
      }

    const createEvent=()=>{
        axios.post(`http://localhost:3000/events/create`, {evento})
        .then(res=>{
            navigate(ROUTES.adminDashboard)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    



    return (
        <Grid2 container bgcolor={'gray'} spacing={1}>
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>
                    Atrás
                </Button>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <h1>Create evento</h1>
            </Grid2>
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>createEvent()}>
                    Crear
                </Button>
            </Grid2>
            <Grid2 size={12} >
                <Grid2 container display={'flex'} justifyContent={'center'}>
                    <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                        <TextField 
                            id="filled-basic" 
                            label="Titulo del eventoo"
                            variant="filled" 
                            onChange={(e)=>setEvento({...evento, title:e.target.value})} 
                         />
                    </Grid2>
                    <Grid2 size={8} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                        <InputLabel id="demo-simple-select-label" >Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={evento.status}
                            label="Estado del eventoo"
                            onChange={handleChange} 
                        >
                            <MenuItem value={true}>Activo</MenuItem>
                            <MenuItem value={false}>Inactivo</MenuItem> 
                        </Select>
                    </Grid2>
                    <Grid2 size={8} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}> 
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            onChange={(e) => handleFileChange(e)}
                            accept="image/*"
                        >
                            Imagen
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        {evento?.imagen && <Box component={'img'} src={evento?.imagen} alt="Uploaded Image" sx={{ width: '500px', marginTop: 2 }} />}
                    </Grid2>
                    <Grid2 size={8} padding={1}>
                        <ReactQuill
                            theme="snow"
                            value={evento.content}
                            onChange={(newContent) => setEvento({ ...evento, content: newContent })}
                            modules={modules}
                        />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}