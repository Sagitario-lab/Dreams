import { Box,  Grid2, Button } from "@mui/material"
import { useNavigate, useParams } from "react-router"
import {useState , useEffect} from 'react'

export const Producto=()=>{
    const {id} = useParams()
    const navigate=useNavigate()
    const productos = [
        {
            id: 1,
            contenido:[
                { nombre: "Poción de Vida", cantidad: 50 },
                { nombre: "Cristal Mágico", cantidad: 30 },
                { nombre: "Espada de Fuego", cantidad: 5 },
                { nombre: "Guantes de Acero", cantidad: 12 },
                { nombre: "Piedra de Encantamiento", cantidad: 20 },
                { nombre: "Fragmento de Alma", cantidad: 3 },
                { nombre: "Capa de Sombras", cantidad: 8 },
                { nombre: "Luz de Estrella", cantidad: 40 },
                { nombre: "Elixir de Poder", cantidad: 25 },
                { nombre: "Piedra Lunar", cantidad: 15 },
                { nombre: "Báculo Mágico", cantidad: 6 },
                { nombre: "Cinturón de Fuerza", cantidad: 10 },
                { nombre: "Poción de Resistencia", cantidad: 35 },
                { nombre: "Espada del Viento", cantidad: 7 },
                { nombre: "Fragmento de Cristal", cantidad: 45 },
                { nombre: "Piedra de Salud", cantidad: 60 },
                { nombre: "Amuleto de Energía", cantidad: 2 },
                { nombre: "Escudo de Hierro", cantidad: 4 },
                { nombre: "Gema del Destino", cantidad: 18 },
                { nombre: "Túnica de Mago", cantidad: 14 }
              ],
            titulo: 'Escala Diciembre',
            link:'https://www.patreon.com/TAGEVOLUTIONGAMERS/shop/escala-diciembre-722430?source=storefront',
            precio: '400',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://assetsio.gnwcdn.com/cyberpunk_main_missions_quest_walkthrough_3.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
        },
        {
            id: 2,
            contenido:[
                { nombre: "Poción de Vida", cantidad: 50 },
                { nombre: "Cristal Mágico", cantidad: 30 },
                { nombre: "Espada de Fuego", cantidad: 5 },
                { nombre: "Guantes de Acero", cantidad: 12 },
                { nombre: "Piedra de Encantamiento", cantidad: 20 },
                { nombre: "Fragmento de Alma", cantidad: 3 },
                { nombre: "Capa de Sombras", cantidad: 8 },
                { nombre: "Luz de Estrella", cantidad: 40 },
                { nombre: "Elixir de Poder", cantidad: 25 },
                { nombre: "Piedra Lunar", cantidad: 15 },
                { nombre: "Báculo Mágico", cantidad: 6 },
                { nombre: "Cinturón de Fuerza", cantidad: 10 },
                { nombre: "Poción de Resistencia", cantidad: 35 },
                { nombre: "Espada del Viento", cantidad: 7 },
                { nombre: "Fragmento de Cristal", cantidad: 45 },
                { nombre: "Piedra de Salud", cantidad: 60 },
                { nombre: "Amuleto de Energía", cantidad: 2 },
                { nombre: "Escudo de Hierro", cantidad: 4 },
                { nombre: "Gema del Destino", cantidad: 18 },
                { nombre: "Túnica de Mago", cantidad: 14 }
              ],
            titulo: 'Escala Noviembre',
            link:'https://www.patreon.com/TAGEVOLUTIONGAMERS/shop/intento-de-arma-roja-nivel-95-nivel-90-632842?source=storefront',
            precio: '4000',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a1f1557-17f3-4d46-b1d4-96ce5aeb56e0/dgj2eo5-57925d1d-dbd3-4bfd-939d-8ad0a78fa1bc.png/v1/fill/w_1280,h_720,q_80,strp/panam_cyberpunk_2077_by_skyr923_dgj2eo5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmExZjE1NTctMTdmMy00ZDQ2LWIxZDQtOTZjZTVhZWI1NmUwXC9kZ2oyZW81LTU3OTI1ZDFkLWRiZDMtNGJmZC05MzlkLThhZDBhNzhmYTFiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3yrjo-8lzyQqB39Iw2otAS52g3laHem7af3c_sg4wvQ'
        },
        {
            id: 3,
            contenido:[
                { nombre: "Poción de Vida", cantidad: 50 },
                { nombre: "Cristal Mágico", cantidad: 30 },
                { nombre: "Espada de Fuego", cantidad: 5 },
                { nombre: "Guantes de Acero", cantidad: 12 },
                { nombre: "Piedra de Encantamiento", cantidad: 20 },
                { nombre: "Fragmento de Alma", cantidad: 3 },
                { nombre: "Capa de Sombras", cantidad: 8 },
                { nombre: "Luz de Estrella", cantidad: 40 },
                { nombre: "Elixir de Poder", cantidad: 25 },
                { nombre: "Piedra Lunar", cantidad: 15 },
                { nombre: "Báculo Mágico", cantidad: 6 },
                { nombre: "Cinturón de Fuerza", cantidad: 10 },
                { nombre: "Poción de Resistencia", cantidad: 35 },
                { nombre: "Espada del Viento", cantidad: 7 },
                { nombre: "Fragmento de Cristal", cantidad: 45 },
                { nombre: "Piedra de Salud", cantidad: 60 },
                { nombre: "Amuleto de Energía", cantidad: 2 },
                { nombre: "Escudo de Hierro", cantidad: 4 },
                { nombre: "Gema del Destino", cantidad: 18 },
                { nombre: "Túnica de Mago", cantidad: 14 }
              ],
            titulo: 'Escala Enero',
            link:'https://www.patreon.com/TAGEVOLUTIONGAMERS/shop/escala-diciembre-722430?source=storefront',
            precio: '900',
            descripcion: 'Hola mis jovenes del hoy, por favor tengamos en cuenta lo siguiente, no tenemos activas las arenas armadas, quedarse AFK o cerrar arenas es sinónimo de una sanción, no le quitemos la experiencia a los jugadores de las arenas, morir o matar. Gracias mis jóvenes promesas. ❤️',
            imagen: 'https://www.slashfilm.com/img/gallery/hbo-max-made-a-calcifer-yule-log-proving-that-the-best-blaze-indeed-burns-brightest-when-circumstances-are-at-their-worst/intro-1640226868.jpg'
        }
    ]

    const [producto, setProducto] = useState(null)

    useEffect(()=>{ 
        selectItemId(id)
    },[])

    const selectItemId=(id)=>{
        switch(id){
            case '1':
                setProducto(productos[0])
                return
            case '2':
                setProducto(productos[1])   
                return  
            case '3':
                setProducto(productos[2])
                return
        }
    }

    return(
        <Grid2 color={'white'}>
            <Grid2 size={10}>
                {
                    producto && 
                    
                    <Grid2 container display='flex' justifyContent={'center'} >
                        <Grid2 size={10}>
                            <Grid2 container spacing={3} display={'flex'} justifyContent={'center'} padding={2}>
                                <Grid2 size={12} display='flex' justifyContent='center' > 
                                    <Box component={'img'} src={producto?.imagen} alt="product-img" border={'1px solid gray'}></Box>
                                </Grid2>
                                <Grid2 size={12} fontSize={'3.5rem'} fontFamily={'cursive'}  display='flex' justifyContent='center'>
                                    {producto?.titulo} - ${producto?.precio}
                                </Grid2>
                                <Grid2 size={12} fontSize={'1.5rem'} fontFamily={'cursive'}>
                                    {producto?.descripcion}
                                </Grid2>
                                <Grid2 display={'flex'} justifyContent={'center'}>
                                    <ul style={{display:'flex', justifyContent:'center', flexDirection:'column',}}>
                                        {producto?.contenido?.map((item,idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <span style={{fontSize:'1.5rem'}}>{item.nombre}</span> - Cantidad: {item.cantidad}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Grid2>
                                <Grid2 size={12} display={'flex'} justifyContent={'center'} >
                                    <a href={producto?.link} target="_black">
                                        <Button variant={'contained'} style={{fontSize:'2rem'}}> 
                                                Comprar
                                        </Button>
                                    </a>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                }
            </Grid2>
        </Grid2>
    )
}