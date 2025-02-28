import { Button, Grid2, TextField } from "@mui/material"
import  { useState } from 'react'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../Routes/ROUTES";

export const CreatePatch=()=>{
    const [value, setValue] = useState(''); 
    const day = new Date();
    const [patchPost, setPatchPost]=useState(
        {
            title: "",
            content: "",
            day: `${day.getDate()} / ${day.getMonth() + 1} / ${day.getFullYear()}`,
        }
    )
    const navigate=useNavigate()
   
 
    const create=()=>{ 
        setPatchPost({...patchPost, content:value})
        axios.post(`http://localhost:3000/patch/create`, {patchPost})
         .then(res=>console.log(res.data))
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
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>console.log(patchPost)}>verradsadasdas</Button>
            </Grid2>
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <TextField id="filled-basic" label="Titulo" variant="filled" onChange={(e)=>setPatchPost({...patchPost, title:e.target.value})} />
            </Grid2>
            <Grid2 size={8} padding={1}>
                <ReactQuill
                theme="snow"
                value={patchPost.content}
                onChange={(newContent) => setPatchPost({ ...patchPost, content: newContent })}
                modules={modules}
                />
            </Grid2>
            
        </Grid2>
    )
}