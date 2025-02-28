import { Box, Button, Grid2, TextField } from "@mui/material"
import  { useState } from 'react'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { styled } from '@mui/material/styles'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";

export const CreateShopArticle=()=>{
    const navigate=useNavigate()
    const [value, setValue] = useState(''); 
    const day = new Date();
    const [article, setArticle]=useState(
        {
            title: "",
            content: "",
            day: `${day.getDate()} / ${day.getMonth() + 1} / ${day.getFullYear()}`,
            imagen:"",
            link:"",
            price: 0,
            description:""
        }
    ) 

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

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setArticle({ ...article, imagen: URL.createObjectURL(file) })
        const reader = new FileReader()
        reader.onloadend = () => {
            setArticle({ ...article, imagen: reader.result })
        }
        reader.readAsDataURL(file)
      }
    
 
    const create=()=>{ 
        setArticle({...article, content:value})
        axios.post(`http://localhost:3000/shop/create`, {article})
         .then(res=>{
            navigate(ROUTES.adminDashboard)
            console.log(res.data)
        })
         .catch(err=>console.log(err))
    } 
     
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

    return(
        <Grid2 container spacing={1} display={'flex'} justifyContent={'center'} 
            style={{
                backgroundImage:'url("https://cdnb.artstation.com/p/assets/images/images/020/059/193/large/mark-dionisio-saint-celestine.jpg?1566203589")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }}
            padding={2}
        >
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>

            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>create()}>CREAR</Button>
            </Grid2>
           
            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                <Grid2 container >
     
                    <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                        <TextField id="filled-basic" label="Titulo" variant="filled" onChange={(e)=>setArticle({...article, title:e.target.value})} />
                    </Grid2>

                    <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                        <TextField id="filled-basic" label="Precio" type="number" variant="filled" onChange={(e)=>setArticle({...article, price:e.target.value})} />
                    </Grid2>

                    <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                        <TextField id="filled-basic" label="Link" variant="filled" onChange={(e)=>setArticle({...article, link:e.target.value})} />
                    </Grid2>

                </Grid2>
            </Grid2>
            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                    <TextField
                        id="filled-basic"
                        multiline
                        rows={4}
                        fullWidth
                        label="Descrición"
                        variant="filled" 
                        onChange={(e)=>setArticle({...article, description:e.target.value})} 
                    />
                </Grid2>
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
                {article.imagen && <Box component={'img'} src={article.imagen} alt="Uploaded Image" sx={{ width: '500px', marginTop: 2 }} />}
            </Grid2>
             
            <Grid2 size={8} padding={1}>
                <ReactQuill
                    theme="snow"
                    value={article.content}
                    onChange={(newContent) => setArticle({ ...article, content: newContent })}
                    modules={modules}
                />
            </Grid2> 
        </Grid2>
    )
}