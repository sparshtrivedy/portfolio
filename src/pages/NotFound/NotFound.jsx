import React from 'react';
import { 
    Typography,
    Box
} from '@mui/material';

export default function NotFound() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
            <Typography variant='h1' sx={{mb: 2, fontSize: 180, fontWeight: 900, color: 'text.secondary'}}>
                404
            </Typography>
            <Typography variant='h5' sx={{mb: 2}}>
                This page cannot be found
            </Typography>
            <Typography variant='subtitle1'>
                Try a different URL or try going back to the <a href='https://www.sparshtrivedy.com/#/'>home page</a>
            </Typography>
        </Box>
    );
}
