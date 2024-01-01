import React, { useState, useEffect } from 'react';
import { 
    Typography, 
    Avatar, 
    Paper, 
    Fade,
    Box
} from '@mui/material';
import sparsh from '../../assets/sparsh-out.jpeg';

export default function TitleCard()  {
    const backgroundImage = 'https://lh3.googleusercontent.com/56hiZfyb2EPY34-CEPG71OmvOGBTHLLhabrKW37cc13w4xp5cs-9Rel-zQO0anoqEejUOE6ZZPckCPVlgpG6N6rVDqoKQ7VA9iS9iHcR2jsGBDvrf0U=w2400';

    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        setChecked(true)
    }, []);
    
    return (
        <Box sx={{
                bgcolor: 'background.main', 
                height: '100vh', 
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
                    height: '96vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    flexDirection: 'column',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Avatar alt="Sparsh Trivedy" src={sparsh} sx={{ width: '40vh', height: '40vh', marginBottom: '3vh' }} />
                <Typography variant='h5' sx={{fontWeight: 500, color: '#212121'}}>Hello, I am</Typography>
                <Fade in={checked} timeout={1000}>
                    <Typography variant='h1' sx={{fontWeight: 500, textAlign: 'center', color: '#212121'}}>Sparsh Trivedy</Typography>
                </Fade>
                <Typography variant='h5' sx={{fontWeight: 500, color: '#212121'}}>I am a software developer</Typography>
            </Paper>
        </Box>
    );
}
