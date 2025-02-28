import { Button, Grid, Grid2, TextField } from "@mui/material"
import { useState } from 'react'
import md5 from "crypto-js/md5";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import colors from "../../assets/Colors";

export const Registro = () => {
    const [userData, setUserData] = useState({
        name: '',
        password: '',
        repeatPassword: '',
        md5Password: ''
    })

    const [typeMessage, setTypeMessage] = useState('')


    const createPlayer = () => {
        const hash = md5(userData.password).toString();
        if (userData.name.trim() === '' || userData.password.trim() === '' || userData.repeatPassword.trim() === '') {
            console.log(userData)
            setTypeMessage('Completar todos los datos')
            handleClick()
            return
        }

        if (userData.password === userData.repeatPassword) {
            setUserData({ ...userData, md5Password: hash })
            setTypeMessage('Cuenta creada con exito')
            handleClick()
        } else {
            setTypeMessage('Las contraseñas no coinciden')
            handleClick()
        }
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                Cerrar
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );


    return (
        <Grid2 container height={'calc(100vh - 146.5px)'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid2 size={2} borderRadius={5} bgcolor={'rgba(0,0,0,0.3)'} padding={2} >
                <Grid2 container spacing={2} >
                    <Grid2
                        size={12} fontSize={'4rem'} fontFamily={"Tangerine, serif"}
                        fontWeight={'bold'} color={colors.fifth} display={'flex'}
                        justifyContent={'center'} alignItems={'center'}
                    >
                        Crea tu cuenta
                    </Grid2>

                    <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <TextField label={"Nombre"} onChange={(e) => setUserData({ ...userData, name: e.target.value })}></TextField>
                    </Grid2>

                    <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <TextField label={"Contraseña"} onChange={(e) => setUserData({ ...userData, password: e.target.value })}></TextField>
                    </Grid2>

                    <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <TextField label={"Repita Contraseña"} onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })}></TextField>
                    </Grid2>

                    <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Button onClick={() => {
                            createPlayer()
                        }}
                            variant="contained" color={colors.fifth}
                        >Registrarse</Button>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 size={2} position={'absolute'} top={200} left={200} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <iframe
                    src="https://discord.com/widget?id=620450878368907274&theme=dark"
                    width="350" height="500" allowtransparency="true" frameborder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
            </Grid2>

            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
                message={typeMessage}
                action={action}
            />
        </Grid2>
    )
}