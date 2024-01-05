import React from 'react';
import { 
    Typography,
    Box, 
    Card, 
    CardContent, 
    Avatar 
} from '@mui/material';
import volunteering from '../../data/volunteering';
import HeaderCard from '../../components/HeaderCard';

export default function Volunteering() {
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {setChecked(true)}, []);
    const backgroundImage = 'https://lh3.googleusercontent.com/uONu3zhnMRwMlgPTI_hasHG5PCrMTjkQVDfgFRzN9TsrvAnX_d4hPBqcqAPdwsmZdLc4B8Z5Ut41a0m4nuwOQtxKjjWcZX2MHCHaZnYhpUrlN8lit2I=w2400-rj';
    
    return (
        <Box sx={{bgcolor: 'background.main', margin: 0}}>
            <HeaderCard backgroundImage={backgroundImage} checked={checked} title={'Volunteering'} />
            <Box sx={{margin: 2, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                {volunteering.map((experience) => (
                    <Card sx={{ borderRadius: '20px', minWidth: '250px', width: {xs: '100%', sm: '32.73%'}, paddingY: 2, marginBottom: 2 }} key={experience.id}>
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
            </Box>
        </Box>
    );
}
