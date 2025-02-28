import {Grid2,TextField,Button,Box} from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import axios from 'axios'
import { styled } from '@mui/material/styles'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ROUTES } from "../../../../Routes/ROUTES"





export const UpdateShopArticle=()=>{
    const {id}=useParams()
    const navigate=useNavigate()
    const [selectedArticle,setSelectedArticle] = useState(null)
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
        setSelectedArticle({ ...selectedArticle, imagen: URL.createObjectURL(file) })
        const reader = new FileReader()
        reader.onloadend = () => {
            setSelectedArticle({ ...article, imagen: reader.result })
        }
        reader.readAsDataURL(file)
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

    useEffect(()=>{
        axios.get(`http://localhost:3000/shop/get/${id}`)
        .then(res=>{ 
            setSelectedArticle(res.data)
        })
    },[id])

    const updateArticle=()=>{
        console.log(selectedArticle)
        axios.put(`http://localhost:3000/shop/update/${id}`,selectedArticle).then(res=>{ 
            navigate(ROUTES.adminDashboard)
        })
    }

    return(
        <Grid2 container bgcolor='gray'>
            <Grid2 size={12}>
                <Button onClick={()=>navigate(ROUTES.adminDashboard)} variant="contained">
                    Atrás 
                </Button>
            </Grid2>

            <Grid2 size={12}  display={'flex'} justifyContent={'center'} >
                <Box fontSize={'1.4rem'}>
                    Actualizar <b>{selectedArticle?.title}</b>
                </Box>
                <Button onClick={()=>updateArticle()} variant="contained">
                    Guardar Cambios
                </Button> 
            </Grid2>

            <Grid2 size={12}>

                <Grid2 container display={'flex'} justifyContent={'center'} >
        
                    <Grid2 size={6} container display={'flex'} justifyContent={'center'} >
                        <Grid2 container>

                           <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                                <TextField 
                                    id="filled-basic" 
                                    label={selectedArticle?.title === null ? "Titulo" : ""} 
                                    variant="filled" 
                                    value={selectedArticle?.title} 
                                    onChange={(e)=>setSelectedArticle({...selectedArticle, title:e.target.value})} 
                                />
                            </Grid2>
  
                            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                                <TextField 
                                    id="filled-basic" 
                                    label={selectedArticle?.price === null ? "Precio" : ""}  
                                    value={selectedArticle?.price} 
                                    type="number" 
                                    variant="filled" 
                                    onChange={(e)=>setSelectedArticle({...selectedArticle, price:e.target.value})} 
                                />
                            </Grid2>
  
                            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                                <TextField 
                                    id="filled-basic"  
                                    label={selectedArticle?.link === null ? "Link" : ""} 
                                    value={selectedArticle?.link}  
                                    variant="filled" 
                                    onChange={(e)=>setSelectedArticle({...selectedArticle, link:e.target.value})} 
                                />
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
                                label={selectedArticle?.description === null ? "Descripción" : ""}
                                value={selectedArticle?.description} 
                                variant="filled" 
                                onChange={(e)=>setSelectedArticle({...selectedArticle, description:e.target.value})} 
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
                        {selectedArticle?.imagen && <Box component={'img'} src={selectedArticle?.imagen} alt="Uploaded Image" sx={{ width: '500px', marginTop: 2 }} />}
                    </Grid2>
                    
                    <Grid2 size={8} padding={1}>
                        <ReactQuill
                            theme="snow"
                            value={selectedArticle?.content}
                            onChange={(newContent) =>
                                setSelectedArticle((prev) => ({
                                    ...prev,
                                    content: newContent, 
                                }))
                            }
                            modules={modules}
                        />
                    </Grid2> 

                </Grid2>

            </Grid2>

        </Grid2>
    )
}