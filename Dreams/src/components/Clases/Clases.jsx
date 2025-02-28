import { Grid2, Box } from "@mui/material"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { LazyVideo } from "../Videos/LazyVideo";
import colors from "../../assets/Colors";
import descarga from '../../assets/descarga.png'

const handleDragStart = (e) => e.preventDefault();

export const Clases = () => {
    const items = [
        <Grid2 container key={'paladin'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}
            sx={{
                backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdwallsbox.com%2Fwallpapers%2Fl%2F1920x1080%2F3%2Fvideo-games-paladin-mmo-mmorpg-grand-fantasia-1920x1080-2091.jpg&f=1&nofb=1&ipt=c1f47e9fb91baf8e4a5d2d6d594f2b5f14018d4e43702b6c51a10af73c1e82a4&ipo=images")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '90vh'
            }}
        >
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Los Paladines son una clase luchadora de tercer rango. Se caracterizan por su alta defensa y gran cantidad de HP, además de poseer habilidades de curación, aunque no tan desarrolladas como las clases sanadoras. <br />También con capaces de controlar la malicia, lo cual los califica con una clase tanque.
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Berserker'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Siendo uno de los mejores DPS del juego, el Berserker puede propinar grandes cantidades de daño a sus enemigos. Es la clase con mayor diversidad de armas de todo el juego, siendo capaz de utilizar espadas 1M o 2M, hachas 1M o 2M, mazas 1M o 2M, escudos, arcos y armas de fuego.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Ranger'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        El Ranger es, sin duda, el tirador más destacado en lo que respecta a los ataques físicos a distancia, por desgracia, no tiene mucha defensa, pero en su lugar, la evasión es alta. Además tiene una habilidad de invisibilidad y también recibe una invocación, la Pantera.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Asesino'} display={'flex'} alignItems={'center'} justifyContent={'center'}
            sx={{
                backgroundImage: `url("https://wallpapercave.com/wp/fG4zV6p.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '700px'
            }}
        >
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://wallpapercave.com/wp/fG4zV6p.jpg"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Además de ser una de las clases de más DPS de Grand Fantasia. Es sin duda, el mas sigiloso, ya que tiene la capacidad de hacerse invisible.
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'MagoBrujo'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Son conocidos como los maestros de los elementos, ya que son capaces de ejecutar hechizos de fuego, hielo y relámpago. Su única arma son los báculos.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Nigromante'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Se caracterizan por su capacidad de realizar maldiciones e invocar criaturas de ultratumba que les sirven de ayuda.
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Sabio'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Los Sabios son la clase híbrida del juego, tiene la capacidad de ser DPS físico, mágico o incluso curandero. Puede usar una gran gama de armas, como son los báculos, las reliquias y las mazas de una y dos manos. Además, utilizan el poder de la naturaleza para atacar.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Clerigo'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Los Clérigos son los curanderos del juego por excelencia, tienen una gama extensa de habilidades de curación, tanto de la vida del compañero como la sanación de estados negativos. Como tal, utilizan la magia para ejecutar sus ataques, siendo una clase de ataque mágico. Pueden usar una variedad de armas muy versátil y útil, así como lo son los Escudos, Mazos, Reliquias y Bastones.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'paladin'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Esta clase tienes una gran cantidad de ataque y penetración en niveles más altos. También tiene una cantidad relativamente alta de reducción de daños a nivel alto

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'paladin'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Es una clase con gran penetración y ataque, especialmente en los niveles más altos, también tiene una alta evasión. Pero es débil en cuanto a la defensa.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Relojero'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        Los Relojeros se basan en el daño mágico a distancia, siendo capaces de invocar una marioneta de apoyo y con habilidades que aplican un muy decente control de masas.

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
        <Grid2 container key={'Duelista'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginY={3}>
            <Grid2 size={6} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                <Box
                    component={'img'}
                    style={{
                        width: '300px'
                    }}
                    src="https://cdn.discordapp.com/attachments/1274475108483858433/1325782347919917136/16_sin_titulo_1.png?ex=677d0a87&is=677bb907&hm=0b1f9c4435b75aa9db842291023a8663ed63affbec67bcab1b75df757d581bc9&"
                    onDragStart={handleDragStart}
                    role="presentation"
                    loading="lazy"
                />
            </Grid2>
            <Grid2 size={6}>
                <Grid2 container>
                    <Grid2 size={12} display={'flex'} alignItems={'start'} justifyContent={'center'}>
                        <LazyVideo
                            width={540}
                            height={315}
                            title={'Video De Clase'}
                            src={'https://www.youtube.com/embed/bN1shALfJqg?si=ux3HjCkL0VeSnmrx&controls=1'}
                        />
                    </Grid2>
                    <Grid2 size={12} padding={2} textAlign={'center'} fontSize={'1.4rem'} color={'#534118'} fontWeight={600}>
                        El Duelista está diseñado para jugadores que disfrutan de un enfoque agresivo, priorizando el daño

                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
        ,
    ];
    return (
        <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'} >

            <Grid2 size={10} display={'flex'} alignItems={'center'} >
                <AliceCarousel
                    autoPlayStrategy={'default'}
                    mouseTracking
                    items={items}
                    infinite
                    disableButtonsControls
                    //autoPlay
                    //autoPlayInterval={15000}
                    disableDotsControls
                    autoHeight
                />
            </Grid2>
        </Grid2>
    )
}