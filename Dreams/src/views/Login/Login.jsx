import {  Grid2, TextField, Box, Button } from "@mui/material"
import {useState} from 'react'
import axios from 'axios' 
import { useNavigate } from "react-router"
 

export const Login=()=>{
    const [userData,setUserData]=useState({user:null,password:null})
    const navigate=useNavigate()

    const login=()=>{ 
        axios.get(`http://localhost:3000/${userData.user}/${userData.password}`).then((e)=>{
            console.log("res: ", e)
           if(e.data){
            if(userData.user === 'admin' || userData.password === 'admin'){
                navigate('/adminDashboard')
            }else{
                console.log("vista de usuario")
                //navigate('/userDashboard')
            }
           }else{
            console.log("error, usuario no encontrado")
           }
        }) 
    }

    return(
        <Box height={'calc(100vh - 134.72px)'}
         style={{
            backgroundImage:'url(https://www.f2p.com/wp-content/uploads/2020/11/Grand-Fantasia-Celebrates-10-years.jpg)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat', 
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
         }}
         >
        <Grid2 container  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid2
                size={12} display={'flex'} justifyContent={'center'}
                alignItems={'center'} flexDirection={'column'} backgroundColor={'rgba(0,0,0,0.6)'}
                padding={4} borderRadius={4}  color={'white'}
            >
                <Box fontSize={'5rem'}>-Dreams-</Box>
                <Box fontSize={'3.5rem'}>-Legion-</Box>
                <Box>
                    <TextField id="filled-basic" label="Usuario" variant="filled"
                        onChange={(e)=>{
                            setUserData({...userData,user:e.target.value})
                        }}
                    />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="Contraseña" variant="filled"
                        onChange={(e)=>{
                            setUserData({...userData,password:e.target.value})
                        }}
                     />
                </Box>
                <Box padding={2}>
                    <Button variant="contained" onClick={()=>{
                        login()
                    }}>
                        Iniciar sesión
                    </Button>
                </Box>
                <Box padding={2}>
                    - O -
                </Box>
                <Box padding={2}>
                    <Button variant="contained" onClick={()=>{
                        console.log(userData.user,userData.password)
                        //login()
                    }}>
                        Registrarse
                    </Button>
                </Box>
           </Grid2>
        </Grid2>
        </Box>
    )
}


//VDU6xidW9rvG8SjT