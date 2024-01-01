import React from 'react';
import {
    Typography,
    Paper,
    Fade,
    Box,
    Grid
} from '@mui/material';
import ProjectsAccordian from './ProjectsAccordian';

export default function Projects() {
    const backgroundImage = 'https://lh3.googleusercontent.com/4ixo00BDJowWndZUO-r-lOeLGVdAUOkKrPlQlxZHaf7Kbh-gfJ0S6HK1_t_lbmf7g60cANV2NVXzXTCSVKZ_s-n2OhWfU72m2xd_zeQ9348Dd3zd348H=w2400-rj';
    
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {setChecked(true)}, []);
    
    return (
        <Box sx={{bgcolor: 'background.main', margin: 0}}>
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
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500, color: '#212121'}}>Projects</Typography></Fade>
            </Paper>
            <Box sx={{margin: 2, marginRight: 0}}>
                <Grid container spacing={2} sx={{height: '100%', width: '100%', display: 'flex', pb: 2}}>
                <Grid item xs={12}>
                    <ProjectsAccordian />
                </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
