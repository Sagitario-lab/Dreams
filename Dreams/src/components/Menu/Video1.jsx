import { Box, Grid2 } from "@mui/material"

export const Video1 =()=>{
    return(
        <Box 
            style={{
            backgroundImage:'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F76%2F52%2FdrkGJ4.jpg&f=1&nofb=1&ipt=7bef1f49e69a945536a934de76d95b08163d2cde89e1da6042e8143b8e414772&ipo=images")',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            height:'calc(92vh - 62.72px)'
          }}
        >
            <Grid2 container position={'relative'}>
                <Grid2 size={12} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'30vh'}></Grid2>
                <Grid2 size={12} display={'flex'} justifyContent={'start'} alignItems={'center'} bgcolor={'rgba(0,0,0,0.8)'}  padding={5} marginBottom={20} >
                    <Grid2 container width={'100%'}>
                        <Grid2 size={8}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9yhub2hndxQ?si=m4PTJudqawe18rmR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Grid2>
                        <Grid2 size={2} >
                            <Box 
                                component={'img'} 
                                src="https://cdn.discordapp.com/attachments/1274475108483858433/1324922850569752627/73_sin_titulo_022452.png?ex=677be44f&is=677a92cf&hm=c25cac605c1a6f02b54c474fdffa46f20a3d030591fe18a28934ed957b3cf11b&"
                                position={'absolute'}
                                width={'400px'}
                                top={180}
                            >
                            </Box>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                </Grid2>
            </Grid2> 
        </Box>
    )
}   