import { useParams } from "react-router"
import { Create } from "./Create"
export const Type = () => {

    const {type} = useParams() 

    const typeParche=(type)=>{
        switch(type){
            case 'create':
                return <Create/>
            case 'delete':
                return 'Eliminar Parche'
            case 'update':
                return 'Actualizar Parche'
            default:
                return 'Parche'
        }
    }

    return(
        <h1 style={{color:'white'}}> 
            {typeParche(type)}
        </h1>
    )
}