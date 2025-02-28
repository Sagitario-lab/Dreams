import { Divider, Grid2, Box, Button } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router";
import colors from "../../assets/Colors";

export const Card =({titulo,notas,fecha,idx})=>{

    const navigate = useNavigate()

    return(
        <Grid2  
            size={4}
            display={'flex'}
            justifyContent={'center'} 
            key={idx}
            bgcolor={`${colors.secondary}`}  
            borderRadius={5}
            width={'100%'}
            border={`3px solid ${colors.primary}`}
        >
            <Button style={{padding:'20px'}} onClick={()=>{navigate(`/notas-del-parche/${idx}`)}}>
                <Grid2 
                    container 
                    display={'flex'}
                    justifyContent={'center'} 
                    alignItems={'center'}
                >

                    <Grid2 
                        size={12}
                        display={'flex'}
                        justifyContent={'start'}
                        fontSize={'2rem'}
                        color={colors.fifth}  
                    >
                        {titulo} 
                    </Grid2>
                    
                    <Divider orientation={"horizontal"}  color={'black'} bgcolor={'black'} width={'100%'}/>

                    <Grid2 size={12} display={'flex'} alignItems={'center'} justifyContent={'start'}  padding={1}>
                        <Avatar
                            alt="Legion"
                            src="https://cdn.discordapp.com/attachments/1274475108483858433/1324922850569752627/73_sin_titulo_022452.png?ex=677be44f&is=677a92cf&hm=c25cac605c1a6f02b54c474fdffa46f20a3d030591fe18a28934ed957b3cf11b&"
                        />
                        <Box
                            fontSize={'1.5rem'}
                            fontFamily={'cursive'} 
                            marginX={1}
                            color={colors.fifth} 
                        >{fecha}</Box>
                    </Grid2> 
                       
                        <Grid2 
                            size={12} 
                            display={'flex'}
                            justifyContent={'start'}
                            height={'50px'} 
                            textOverflow={'ellipsis'}
                            overflow={'hidden'}
                            color={'white'}
                        >
                            <Box dangerouslySetInnerHTML={{__html: notas}}></Box>
                        </Grid2>
                </Grid2>
            </Button>
        </Grid2>
    )
}