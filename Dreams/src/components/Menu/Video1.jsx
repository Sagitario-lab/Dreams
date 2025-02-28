import { Box, Grid2 } from "@mui/material"
import { LazyVideo } from "../Videos/LazyVideo"
import colors from "../../assets/Colors"
import img from "../../assets/img.jpg"

export const Video1 = () => {
    return (

        <Grid2 container display={'flex'} alignItems={'center'} height={'calc(100vh - 206.5px)'} >
            <Grid2 size={6} display={'flex'} justifyContent={'center'} alignItems={'end'} padding={5} marginBottom={20} >
                <LazyVideo
                    width={560}
                    height={315}
                    title={'Video De Clase'}
                    src={'https://www.youtube.com/embed/7psfrvT1ifE?si=tuTJepHKUm1t-85f'}
                />
            </Grid2>
            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    src={img}
                    position={'absolute'}
                    width={'600px'}
                    top={80}
                >
                </Box>
            </Grid2>
        </Grid2>
    )
}   