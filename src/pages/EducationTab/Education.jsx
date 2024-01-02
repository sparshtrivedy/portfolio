
import React from 'react';
import { 
    Typography, 
    Paper, 
    Fade, 
    Grid, 
    Box, 
    Card, 
    Avatar, 
    Divider, 
    CardMedia,
} from '@mui/material';
import CourseList from './CourseList';
import ubc from '../../assets/images/ubc.jpeg';
import campus from '../../assets/images/campus.jpeg';

export default function Education() {
    const [checked, setChecked] = React.useState(false);
    
    React.useEffect(() => {setChecked(true)}, []);
    const backgroundImage = 'https://lh3.googleusercontent.com/vvm00GimaLqpsW4zeODWAbrpApsUfm8t7XVOvW4ZMShdEjRa5dx3ZzQzXcbg7jMa6Fo2X63naBVvcXhuj3etkPO78ZHbA21oQfVc2xuWRo2A7wlKaE4=w2400-rj';
    
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
    );

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
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500, color: '#212121'}}>Education</Typography></Fade>
            </Paper>
            <Box sx={{margin: 2, paddingBottom: 2}}>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: '55vh', width: '100%', borderRadius: '20px' }}>
                            <Box style={{display: 'flex', alignItems: 'center', padding: '1em'}}>
                                <Box>
                                    <Avatar alt={'rover logo'} src={ubc} sx={{ width: '3em', height: '3em', marginRight: 2 }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Sep 2020 - present
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        University of British Columbia
                                    </Typography>
                                    <Typography color="text.secondary">
                                        B.S. Computer Science {bull} Year 3
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{width: '100%'}} />
                            <ul style={{padding: '1em', marginLeft: '1em'}}>
                                <li><Typography>Outstanding International Student Award</Typography></li>
                                <li><Typography>Computer Science Teaching Assistant</Typography></li>
                                <li><Typography>Cumulative Average: 85.0%</Typography></li>
                                <li><Typography>CPSC + MATH + STAT Average: 86.1%</Typography></li>
                            </ul>
                            <CardMedia component={"img"} alt={'campus'} image={campus} style={{width: '100%', margin: 0, padding: 0}} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CourseList />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
