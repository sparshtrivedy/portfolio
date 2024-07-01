import React from 'react';
import {
    Box,
    Grid,
    Card,
    Typography,
    CardContent,
    CardActions,
    IconButton,
    Collapse,
    Button,
} from '@mui/material';
import HeaderCard from '../../components/HeaderCard';
import projects from '../../data/projects';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { GitHub, OpenInNew } from '@mui/icons-material';

const mediaStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
};

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MediaCarousel = ({ images }) => {
    console.log('MediaCarousel images:', images); // Debugging line

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (images.length === 1) {
        const image = images[0];
        return (
            <div>
                {image.type === 'video' ? (
                    <video src={image.item} controls style={mediaStyle} />
                ) : (
                    <img src={image.item} alt={image.label} style={mediaStyle} />
                )}
            </div>
        );
    }

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    {image.type === 'video' ? (
                        <video src={image.item} controls style={mediaStyle} />
                    ) : (
                        <img src={image.item} alt={image.label} style={mediaStyle} />
                    )}
                </div>
            ))}
        </Slider>
    );
};

export default function Projects() {
    const backgroundImage = 'https://lh3.googleusercontent.com/4ixo00BDJowWndZUO-r-lOeLGVdAUOkKrPlQlxZHaf7Kbh-gfJ0S6HK1_t_lbmf7g60cANV2NVXzXTCSVKZ_s-n2OhWfU72m2xd_zeQ9348Dd3zd348H=w2400-rj';
    
    const [checked, setChecked] = React.useState(false);
    const [expandedCard, setExpandedCard] = React.useState(null); // State to track expanded card

    const handleExpandClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    React.useEffect(() => {setChecked(true)}, []);
    
    return (
        <Box sx={{ bgcolor: 'background.main', paddingBottom: 2 }}>
            <HeaderCard backgroundImage={backgroundImage} checked={checked} title={'Projects'} />
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2}>
                    {projects.map((item) => (
                        <Grid item xs={12} md={6} lg={4} key={item.id}>
                            <Card sx={{ height: 'auto', borderRadius: 5 }} elevation={3}>
                                <MediaCarousel images={item.media} />
                                <CardContent>
                                    <Typography variant='h6'>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                        {item.skills}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Button size="small" href={item.github} sx={{mr: 2}}>
                                        <GitHub sx={{mr: 1}} />
                                        GitHub
                                    </Button>
                                    {item.view !== '' &&
                                        <Button size="small" href={item.view}>
                                            <OpenInNew sx={{mr: 1}} />
                                            View
                                        </Button>
                                    }
                                    <ExpandMore
                                        expand={expandedCard === item.id}
                                        onClick={() => handleExpandClick(item.id)}
                                        aria-expanded={expandedCard === item.id}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expandedCard === item.id} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant='body1' sx={{ color: 'text.secondary', padding: 2 }}>
                                            <ul>
                                                {item.description.map((point, index) => (
                                                    <li key={`${item.id}-${index}`}><Typography>{point}</Typography></li>
                                                ))}
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
