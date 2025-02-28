import { Grid2,Box } from "@mui/material"
import '../../App.css'
import colors from "../../assets/Colors"

export const ServerData=()=>{
    return(
        <Grid2 container display={'flex'} justifyContent={'center'}> 
            <Grid2 size={8}>
                <Grid2 container>
                    <Grid2 size={12}>
                        <Grid2 container fontSize={'4rem'}> 
                            <Grid2 size={4} display={'flex'} justifyContent={'center'}>
                                <div class="e-card playing">
                                    <div class="image"></div> 
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div> 
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> Exp.</Box>
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> x3</Box> 
                                </div> 
                            </Grid2>
                            <Grid2 size={4} display={'flex'} justifyContent={'center'}>
                                <div class="e-card playing">
                                    <div class="image"></div> 
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div> 
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> Drop</Box>
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> x3</Box> 
                                </div> 
                            </Grid2>
                            <Grid2 size={4} display={'flex'} justifyContent={'center'}>
                                <div class="e-card playing">
                                    <div class="image"></div> 
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div> 
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> Oro</Box>
                                    <Box display={'flex'} justifyContent={'center'} marginTop={5} position={'relative'}> x3</Box> 
                                </div> 
                            </Grid2>  
                        </Grid2>
                    </Grid2> 

                    <Grid2 size={12}  fontSize={'3rem'} display={'flex'} justifyContent={'center'}  >
                        <Box 
                            border={`3px solid ${colors.primary}`} boxShadow={`0px 0px 30px ${colors.secondary}`}
                            display={'flex'} justifyContent={'space-between'} padding={2} borderRadius={'15px'}
                            sx={{textShadow: `1px 4px 15px ${colors.fourth}`}} 
                        >
                            Fines de semana <Box marginLeft={1} color={'black'} fontWeight={700}>x5</Box>  
                        </Box>
                    </Grid2>

                    <Grid2 size={12} display={'flex'} justifyContent={'center'}>
                        <ul style={{fontSize:'2rem', fontFamily:'cursive'}}>
                            <li>
                                Nuevas dungeons
                            </li>   
                            <li>
                                Nuevos genkis
                            </li> 
                            <li>
                                Nuevas mascotas
                            </li> 
                            <li>
                                Nuevas monturas
                            </li>  
                        </ul>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}