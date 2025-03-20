import React, { useState, useEffect } from 'react';
import { 
    Typography, 
    Avatar, 
    Paper, 
    Fade,
    Box,
    useMediaQuery
} from '@mui/material';
import peep from '../../assets/images/peep.jpeg';

export default function TitleCard()  {
    const backgroundImage = 'https://lh3.googleusercontent.com/56hiZfyb2EPY34-CEPG71OmvOGBTHLLhabrKW37cc13w4xp5cs-9Rel-zQO0anoqEejUOE6ZZPckCPVlgpG6N6rVDqoKQ7VA9iS9iHcR2jsGBDvrf0U=w2400';

    const [checked, setChecked] = useState(false);

    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    
    useEffect(() => {
        setChecked(true)
    }, []);
    
    return (
        <Box sx={{
                bgcolor: 'background.main', 
                height: {xs: `calc(100%)`, sm: '100vh'}, 
                margin: 0, 
                padding: 2, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <Paper elevation={3}
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: {xs: '100%', sm: '96vh'},
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    flexDirection: 'column',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Avatar alt="Sparsh Trivedy" src={peep} sx={{ width: {xs: '30vh', sm: '40vh'}, height: {xs: '30vh', sm: '40vh'}, marginBottom: '3vh', bgcolor: 'darkmagenta' }} />
                {isSm?
                    <Typography variant='h5' sx={{fontWeight: 500, color: '#212121'}}>Hello, I am</Typography>:
                    <Typography variant='h5' sx={{fontWeight: 500, color: '#212121', fontSize: '1.2rem'}}>Hello, I am</Typography>
                }
                {isSm?
                    <Fade in={checked} timeout={1000}>
                        <Typography variant='h1' sx={{fontWeight: 500, textAlign: 'center', color: '#212121'}}>Sparsh Trivedy</Typography>
                    </Fade>:
                    <Fade in={checked} timeout={1000}>
                        <Typography variant='h1' sx={{fontWeight: 500, textAlign: 'center', color: '#212121', fontSize: '3.5rem'}}>Sparsh Trivedy</Typography>
                    </Fade>
                }
                {isSm?
                    <Typography variant='h5' sx={{fontWeight: 500, color: '#212121'}}>Computer Science @ UBC</Typography>:
                    <Typography variant='h5' sx={{fontWeight: 500, color: '#212121', fontSize: '1.2rem'}}>Computer Science @ UBC</Typography>
                }
            </Paper>
        </Box>
    );
}
