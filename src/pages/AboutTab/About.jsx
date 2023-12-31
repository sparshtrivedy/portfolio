
import React from 'react';
import { 
    Typography, 
    Paper, 
    Fade, 
    Grid, 
    ImageList, 
    ImageListItem, 
    Tooltip 
} from '@mui/material';
import picturelist from '../../data/picturelist';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function About() {
    const backgroundImage = 'https://lh3.googleusercontent.com/D3-OahttrL-yH62XV-Ss1HzQWT1RaCeAowh_b24TSPUbfilOv559cGrzrExTklxin0oOrZ4RlyPYe85coUMZDSTCqgMOlsofyLm3RKFzhwONddZRf8X_=w2400-rj';

    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {setChecked(true)}, []);
    
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
                <Fade in={checked} timeout={1000}>
                    <Typography variant='h2' sx={{fontWeight: 500}}>About me</Typography>
                </Fade>
            </Paper>
            <Grid container spacing={2} sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'stretch'}}>
                <Grid item xs={6} sx={{padding: 2}}>
                    <Typography sx={{margin: 2}}>Hello, my name is Sparsh and I am a 3rd year CS major at UBC, where I am currently a TA for an Applied Machine Learning course.</Typography>
                    <Typography sx={{margin: 2}}>I find joy in learning new technologies and using them to build cool projects! My self-learning is driven by a curiosity to explore new things.</Typography>
                    <Typography sx={{margin: 2}}>I have previously worked as a Software Developer co-op at BGC Engineering where I worked on a risk assessment and management platform for Engineers. I have also done a Work-Learn with the Faculty of Forestry at UBC where I worked on developing the TA application portal.</Typography>
                    <Typography sx={{margin: 2}}>When I'm not immersed in code, I like to explore the outdoors and try out new cafes. I have also learnt Tabla, an Indian classical instrument for over 9 years and have even played at several venues.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}
                        sx={{
                            height: '98%',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            justifyContent: 'space-evenly',
                            marginBottom: '2vh',
                        }}
                    >            
                        <ImageList
                            sx={{  width: '100%', height: '100%', zIndex: 0, borderRadius: '20px' }}
                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                            >
                            {picturelist.map((item, index) => (
                                <Fade
                                    in={checked}
                                    timeout={1000}
                                    key={index}
                                >
                                    <Tooltip title={item.title} arrow>
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 121, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                    </Tooltip>
                                </Fade>
                            ))}
                            </ImageList>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
