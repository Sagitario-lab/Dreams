import { Grid2,Box } from "@mui/material"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

export const Clases=()=>{
    const items = [
        <Grid2 container key={'paladin'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Grid2 size={4} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <img
                    style={{
                        width:'300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart} 
                    role="presentation"
                />
            </Grid2>
            <Grid2 size={4} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                Los Paladines son una clase luchadora de tercer rango. Se caracterizan por su alta defensa y gran cantidad de HP, además de poseer habilidades de curación, aunque no tan desarrolladas como las clases sanadoras. <br/>También con capaces de controlar la malicia, lo cual los califica con una clase tanque.
            </Grid2>
            <Grid2 size={4} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </Grid2>
        </Grid2>
        ,


        <Box key={'paladin2'}>
        <img
        style={{
            width:'300px'
        }}
            src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
            onDragStart={handleDragStart} 
            role="presentation"
        />
        <h1>Berserker</h1>
    </Box>,
    <Box key={'paladin3'}>
    <img
    style={{
        width:'300px'
    }}
        src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
        onDragStart={handleDragStart} 
        role="presentation"
    />
    <h1>Berserker</h1>
</Box>,
        ];
    return(
        <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Grid2 component={'h1'} size={12} display={'flex'} justifyContent={'center'} color={'white'}> Clases</Grid2>
            <Grid2 size={10}>
                <AliceCarousel 
                    autoPlayStrategy={'default'}
                    mouseTracking
                    items={items}
                    infinite
                    disableButtonsControls
                    //autoPlay
                    //autoPlayInterval={10000}
                    disableDotsControls
                 />
            </Grid2>
        </Grid2>
    )
}