import { Video1 } from "../../components/Menu/Video1"
import { NotasParche } from "../../components/NotasParche/NotasParche"
import {Clases} from '../../components/Clases/Clases.jsx'
import { useEffect,useState } from "react"
import axios from "axios"

export const Menu=()=>{
    const [parchesLista, setParchesLista] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/init').then((e)=>{
            console.log(e)
        },[])

        axios.get('http://localhost:3000/adminDashboard/parches/get').then(res => {
            const arr=res.data 
            setParchesLista(arr.slice(0,3))
        })
        .catch(err => console.error('Error fetching parches:', err));
    })
 
    return(
        <>
            <Video1/>
            <NotasParche parches={parchesLista}/>
            <Clases/>
        </>
    )
}