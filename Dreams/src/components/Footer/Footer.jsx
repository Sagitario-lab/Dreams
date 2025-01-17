import { Grid2 } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

export const Footer = () => {
    return (
        <Grid2 container paddingX={4} paddingY={2} bgcolor={'black'}>
            <Grid2 size={6} color={'white'} fontSize={'2rem'}>
                Dreams Legion
            </Grid2>
            <Grid2 container size={6} display={'flex'} justifyContent={'end'} spacing={2}>
                <Tooltip title='Grand Fantasia Dreams'>
                    <a href="https://www.facebook.com/profile.php?id=61568220819508" target="_blank">
                        <Avatar alt="FaceBook" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" />
                    </a>
                </Tooltip>

                <Tooltip title='fantasydreamsgf'>
                    <a href="https://www.instagram.com/fantasydreamsgf/" target="_blank">
                        <Avatar alt="Instagram" src="https://i.blogs.es/759769/trucosinstagram/650_1200.webp" />
                    </a>
                </Tooltip>

                <Tooltip title='fantasydreamsgf'>
                    <a href="https://discord.com/store" target="_blank">
                        <Avatar alt="Discord" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fdiscord-logo.jpg&f=1&nofb=1&ipt=359e6e552430cec35b6119ab8ccbf07b4dcd31176857326b225fc870574522c2&ipo=images" />
                    </a>
                </Tooltip>
            </Grid2>
        </Grid2>
    )
}