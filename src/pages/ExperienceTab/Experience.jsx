
import React from 'react';
import {
    Typography,
    Paper, 
    Grid, 
    Box, 
    Divider 
} from '@mui/material';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceAccordian from './ExperienceAccordian';
import HeaderCard from '../../components/HeaderCard';

export default function Experience() {
    const backgroundImage = 'https://lh3.googleusercontent.com/ZBG1cIsDtZG3zwzieULlEvBk_jw6VpxHOkDlvCe9FUdoVObz7MxUtKmATzYZj1cYaj99SOzcpiz0Gjz8a78aEXpV_yEotJjfMwQrQvCD_4Up7qqfYWo=w2400-rj';

    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        setChecked(true)
    }, []);
    
    return (
        <Box sx={{bgcolor: 'background.main', margin: 0}}>
            <HeaderCard backgroundImage={backgroundImage} checked={checked} title={'Experience'} />
            <Box sx={{margin: 2, marginRight: 0}}>
                <Grid container spacing={2} sx={{height: '100%', width: '100%', display: 'flex', pb: 2}}>
                    <Grid item xs={12} sm={7}>
                        <ExperienceAccordian />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Paper elevation={3}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '20px',
                                justifyContent: 'space-evenly',
                                flexDirection: 'column',
                                margin: 0
                            }}
                        >
                            <Typography variant='h5' sx={{margin: 2}}>Timeline</Typography>
                            <Divider sx={{width: '90%'}} />
                            <ExperienceTimeline />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
