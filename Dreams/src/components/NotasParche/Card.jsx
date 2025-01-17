import { Divider, Grid2, Box, Button } from "@mui/material"
import Avatar from '@mui/material/Avatar';


export const Card =({titulo,notas,fecha,idx})=>{
    return(
        <Grid2  
            size={4}
            display={'flex'}
            justifyContent={'center'} 
            key={idx}
            bgcolor={'#1A161C'} 
            borderRadius={5}
        >
            <Button style={{padding:'20px'}} onClick={()=>{console.log(idx)}}>
                <Grid2 
                    container 
                    display={'flex'}
                    justifyContent={'center'} 
                    alignItems={'center'}
                >
                        <Grid2 size={9} display={'flex'} alignItems={'center'} justifyContent={'start'} padding={1} minHeight={'10vh'}>
                            <Avatar
                                alt="Legion"
                                src="https://cdn.discordapp.com/attachments/1274475108483858433/1324922850569752627/73_sin_titulo_022452.png?ex=677be44f&is=677a92cf&hm=c25cac605c1a6f02b54c474fdffa46f20a3d030591fe18a28934ed957b3cf11b&"
                            />
                            <Box
                                fontSize={'1.5rem'}
                                fontFamily={'cursive'}
                                color={'white'}
                            >{fecha}</Box>
                        </Grid2>
                        <Divider orientation={"horizontal"}  color={'black'} bgcolor={'black'} width={'100%'}/>
                        <Grid2 size={12} display={'flex'} justifyContent={'start'} paddingY={1} color={'#6E5413'}>Dreams Legion</Grid2>
                        <Grid2 
                            size={12}
                            display={'flex'}
                            justifyContent={'start'}
                            fontSize={'2rem'}
                            color={'white'}
                        >
                            {titulo} 
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