import React from 'react';
import { 
    Typography, 
    Paper, 
    Fade, 
    Box, 
    Card, 
    CardContent, 
    Avatar 
} from '@mui/material';
import volunteering from '../../data/volunteering';

export default function Volunteering() {
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {setChecked(true)}, []);
    const backgroundImage = 'https://lh3.googleusercontent.com/uONu3zhnMRwMlgPTI_hasHG5PCrMTjkQVDfgFRzN9TsrvAnX_d4hPBqcqAPdwsmZdLc4B8Z5Ut41a0m4nuwOQtxKjjWcZX2MHCHaZnYhpUrlN8lit2I=w2400-rj';
    
    return (
        <div style={{backgroundColor: '#f8fafd', margin: 0}}>
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
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500}}>Volunteering</Typography></Fade>
            </Paper>
            <Box sx={{margin: 2}}>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    {volunteering.map((experience) => (
                        <Card sx={{ borderRadius: '20px', minWidth: '250px', maxWidth: '32.73%', paddingY: 2, marginBottom: 2 }} key={experience.id}>
                            <CardContent>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <Avatar alt={'sus logo'} src={experience.img} sx={{ width: '3em', height: '3em', marginRight: 1 }} />
                                    </div>
                                    <div>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {experience.duration}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {experience.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {experience.location}
                                        </Typography>
                                    </div>
                                </div>
                                <ul style={{marginLeft: '1em'}}>
                                    {experience.description.map((point, index) => (
                                        <li key={index}><Typography>{point}</Typography></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
}
