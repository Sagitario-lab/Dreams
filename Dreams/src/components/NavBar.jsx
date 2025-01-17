import { Box, Grid2 } from "@mui/material"
import '../index.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { useNavigate } from "react-router";
import { ROUTES } from "../Routes/ROUTES";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export const NavBar = () => {
    const [value, setValue] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let navigate = useNavigate()

    return (
        <Grid2 container backgroundColor={'rgb(0,0,0)'} position={'sticky'} top={0} zIndex={1}>
            <Grid2
                size={6}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box width={'70%'}>
                    <Box
                        component={'h1'}
                        style={{ fontFamily: "Playwrite CA Guides, serif", fontSize: '1.2rem', paddingLeft: '1rem', color: 'white' }}
                    >
                        Dreams Legion
                    </Box>
                </Box>
            </Grid2>

            <Grid2 size={6} display={'flex'} justifyContent={'flex-end'} alignItems={'center'} paddingRight={4}>

                <Button
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                    onClick={() => navigate(ROUTES.menu)}
                >
                    <MenuIcon />
                    Inicio
                </Button>

                <Button
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                    onClick={() => navigate(ROUTES.parche)}
                >
                    <ArticleIcon />
                    Parche
                </Button>

                <Button
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                    onClick={() => navigate(ROUTES.tienda)}
                >
                    <LocalGroceryStoreIcon />
                    Tienda
                </Button>

                <Button style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white'
                }}
                    onClick={() => navigate(ROUTES.eventos)}>
                    <EmojiEventsIcon />
                    Eventos
                </Button>

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <DownloadIcon />
                    Descarga
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} disabled>Cliente</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href="https://www.mediafire.com/file/tgc90rf4r63vxzj/DreamsV2.rar/file" target="_blank" style={{textDecoration: 'none', color: 'black'}}>Mediafire</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disabled>Contraseña: 'legion2025'</MenuItem>
                </Menu>
                <Button style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white'
                }} onClick={() => navigate(ROUTES.login)}>
                    <AccountBoxIcon />
                    Cuenta
                </Button>

            </Grid2>
        </Grid2>
    )
}