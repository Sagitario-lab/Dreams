import { Video1 } from "../../components/Menu/Video1"
import { NotasParche } from '../../components/NotasParche/NotasParche.jsx'
import { Clases } from '../../components/Clases/Clases.jsx';
import { useEffect, useState } from "react"
import axios from "axios"
import { ServerData } from "../../components/Menu/ServerData.jsx";
import { Box } from "@mui/material";

export const Menu = () => {
    const [parchesLista, setParchesLista] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/patch/getAll').then(res => {
            const arr = res.data
            console.log(arr)
            setParchesLista(arr.reverse().slice(0, 3).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
        }).catch(err => console.error('Error fetching parches:', err));
    }, [])

    return (
        <>
            <Box sx={{
                backgroundImage: 'url("https://scontent.fepa11-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQOZWvKiuh7xXfafGVG7qpEjVoYklVUIVnuFva5sVS7d9A_mLTY1uoRJOhvk0cGHfyI6LO3T4SQCCjqL944gLowFq27JseCFLShJ7P2Uyy47SzvcGDyspcB9m3VFn1bFvS9t19OjIBWNAABkhNHvnXXIia-Bhg.jpeg?_nc_ht=scontent.fepa11-1.fna.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYBoFf4kO7CF6fLv0tVxfHotIbJkBhvWGWe-WDf4eI3TAQ&oe=67BFF882&_nc_sid=5b3566")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgrounRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <Box
                    sx={{
                        background: 'linear-gradient(180deg ,rgba(255, 154, 157, 0) 90%,rgb(0, 0, 0))',
                        paddingBottom: '100px'
                    }}
                >
                    <Video1 />

                    <ServerData />
                </Box>
            </Box>

            {parchesLista.length > 0 && <NotasParche parches={parchesLista} />}

            <Clases />
        </>
    )
}   