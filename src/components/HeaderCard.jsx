import React from 'react';
import { 
    Typography, 
    Paper, 
    Fade
} from '@mui/material';

export default function HeaderCard ({ backgroundImage, checked, title }) {
    return (
        <Paper elevation={3}
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                flexDirection: 'column',
                margin: 2
            }}
        >
            <Fade in={checked} timeout={1000}>
                <Typography variant='h2' sx={{fontWeight: 500, color: '#212121'}}>
                    {title}
                </Typography>
            </Fade>
        </Paper>
    );
};