import { Box, Grid2, Button} from "@mui/material"
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import  { useState, useEffect } from 'react';  
import { useParams,useNavigate } from 'react-router';
import axios from 'axios' 
import { ROUTES } from "../../../../Routes/ROUTES";

export const UpdatePatch=()=>{
    const {id}=useParams()
    const [patchPost, setPatchPost]=useState({})
    const navigate=useNavigate()

    const updatePatch=()=>{
        const { _id, ...updateData } = patchPost;
        axios.put(`http://localhost:3000/adminDashboard/parches/update/${id}`,updateData)
        .then(res=>navigate('/adminDashboard'))
    }


    useEffect(()=>{
        axios.get(`http://localhost:3000/patch/get/${id}`).then(res=>{ 
            setPatchPost(res.data) 
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
        <Grid2 container color={'white'} display={'flex'} justifyContent={'center'}>
            
            <Grid2 size={12}>
                <Button variant="contained" onClick={()=>navigate(ROUTES.adminDashboard)}>Atrás</Button>
            </Grid2>
           
            <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                <Box component={'h1'}>
                    Actualizar {patchPost?.patchPost?.title}
                </Box>
                <Box>
                    <Button onClick={()=>updatePatch()}>
                        Guardar
                    </Button> 
                </Box>
            </Grid2>
            <Grid2 size={8}>
            <ReactQuill
                theme="snow"
                value={patchPost.patchPost?.content}
                onChange={(prev) => (setPatchPost({...patchPost, patchPost:{...patchPost.patchPost, content:prev}}))} 
                modules={modules}
            />
            </Grid2>
        </Grid2>
    )
}