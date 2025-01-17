import { Grid2, Box, Divider,Button} from "@mui/material"
import '../../index.css'
import {  useNavigate} from "react-router"

export const Tienda = () => {

    const productos = [
        {
            id: '1',
            titulo: 'Escala Diciembre',
            precio: '400',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://assetsio.gnwcdn.com/cyberpunk_main_missions_quest_walkthrough_3.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
        },
        {
            id: '2',
            titulo: 'Escala Noviembre',
            precio: '4000',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a1f1557-17f3-4d46-b1d4-96ce5aeb56e0/dgj2eo5-57925d1d-dbd3-4bfd-939d-8ad0a78fa1bc.png/v1/fill/w_1280,h_720,q_80,strp/panam_cyberpunk_2077_by_skyr923_dgj2eo5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmExZjE1NTctMTdmMy00ZDQ2LWIxZDQtOTZjZTVhZWI1NmUwXC9kZ2oyZW81LTU3OTI1ZDFkLWRiZDMtNGJmZC05MzlkLThhZDBhNzhmYTFiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3yrjo-8lzyQqB39Iw2otAS52g3laHem7af3c_sg4wvQ'
        },
        {
            id: '3',
            titulo: 'Escala Enero',
            precio: '900',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://www.slashfilm.com/img/gallery/hbo-max-made-a-calcifer-yule-log-proving-that-the-best-blaze-indeed-burns-brightest-when-circumstances-are-at-their-worst/intro-1640226868.jpg'
        }
    ]

    const navigate=useNavigate()

    return (
        <Grid2 container display={'flex'} justifyContent={'center'} padding={4} style={{height:'calc(100vh - 50px)'}}>
            <Grid2 size={10}>
                <Grid2 container spacing={4}>
                    {
                        productos.map((data, idx) => {
                            return (
                                <Grid2
                                    size={4}
                                    bgcolor={'#1A161C'} 
                                    key={idx} 
                                    display={'flex'}
                                    justifyContent={'center'}
                                    flexDirection={'column'}
                                >
                                    <Grid2 size={12}>
                                        <Box component='img' src={data.imagen} width={'100%'}></Box>
                                    </Grid2>
                                    <Button onClick={()=>navigate(`/tienda/${data.id}`)} >
                                        <Grid2 container>
                                            <Grid2 size={12}fontSize={'2.5rem'} fontFamily={'cursive'} color={'white'} display={'flex'} justifyContent={'center'}>
                                                {data.titulo}
                                            </Grid2>
                                            <Grid2 size={12} fontSize={'2rem'} color={'gray'} display={'flex'} justifyContent={'center'}>
                                                ${data.precio}
                                            </Grid2>
                                            <Divider />
                                            <Grid2 size={12} height={'150px'} color={'white'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}  
                                                class='multilineTruncate' 
                                            >
                                                {data.descripcion} 
                                            </Grid2>
                                        </Grid2>
                                    </Button>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </Grid2>
        </Grid2>
    )
}