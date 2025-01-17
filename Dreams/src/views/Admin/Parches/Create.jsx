import { Button, Grid2, TextField } from "@mui/material"
import  {  useEffect, useState } from 'react';
import { useParams } from "react-router";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'

export const Create=()=>{
    const [value, setValue] = useState('');
    const date=new Date() 

    const [patchPost, setPatchPost]=useState(
        {
            title:'',
            content: null,
            day:  `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`,
        }
    )
    const {type}=useParams()
 
    const create=()=>{ 
        setPatchPost({...patchPost, content:value})
        axios.post(`http://localhost:3000/adminDashboard/parches/${type}`, {patchPost})
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
    }
    

    return(
        <Grid2 container spacing={1} display={'flex'} justifyContent={'center'} 
            style={{
                backgroundImage:'url("https://cdnb.artstation.com/p/assets/images/images/020/059/193/large/mark-dionisio-saint-celestine.jpg?1566203589")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }}
            padding={2}
        >
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>create()}>CREAR</Button>
            </Grid2>
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <Button variant="contained" onClick={()=>console.log(patchPost)}>asdasdsadasd</Button>
            </Grid2>
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
                <TextField id="filled-basic" label="Titulo" variant="filled" onChange={(e)=>setPatchPost({...patchPost, title:e.target.value})} />
            </Grid2>
            <Grid2 size={8} bgcolor={'black'} padding={1}>
                <ReactQuill theme="snow" value={patchPost.content} onChange={(e)=>{ 
                    setPatchPost({...patchPost, content:e})
                    
                    }} />
            </Grid2>
        </Grid2>
    )
}