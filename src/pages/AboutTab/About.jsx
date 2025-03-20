import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    Grid,
    Box,
    Paper,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    ListItemAvatar,
    Divider,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    TextField,
} from '@mui/material';
import picturelist from '../../data/picturelist';
import {
    AlternateEmail,
    LinkedIn,
    GitHub,
    Instagram,
    ContactPage,
    LocationOn,
    Search,
} from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import PropTypes from 'prop-types';
import peep from '../../assets/images/peep.jpeg';
import Connect from '../ConnectTab/Connect';
// import as from '../../assets/images/alphasense_logo.jpeg';
import ubc from '../../assets/images/ubc.jpeg';
import WritingCard from '../WritingsTab/WritingCard';
import { writings } from "../../data/writings";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ margin: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} sx={{ height: 'auto', padding: 4, borderRadius: 5 }}>
                                <Typography variant='h5'>Socials</Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }} href="mailto:sparsh.trivedy2140@gmail.com">
                                            <ListItemIcon>
                                                <AlternateEmail />
                                            </ListItemIcon>
                                            <ListItemText primary="Mail" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }} href="https://www.linkedin.com/in/sparshtrivedy/">
                                            <ListItemIcon>
                                                <LinkedIn />
                                            </ListItemIcon>
                                            <ListItemText primary="LinkedIn" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }} href="https://github.com/sparshtrivedy">
                                            <ListItemIcon>
                                                <GitHub />
                                            </ListItemIcon>
                                            <ListItemText primary="GitHub" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }} href="https://www.instagram.com/sparshtrivedy/">
                                            <ListItemIcon>
                                                <Instagram />
                                            </ListItemIcon>
                                            <ListItemText primary="Instagram" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }} disabled>
                                            <ListItemIcon>
                                                <ContactPage />
                                            </ListItemIcon>
                                            <ListItemText primary="Resume" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Paper>
                            <Paper elevation={3} sx={{ height: 'auto', padding: 4, borderRadius: 5, marginY: 2 }}>
                                <Typography variant='h5'>Current</Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <List>
                                    {/* <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }}>
                                            <ListItemAvatar>
                                                <Avatar alt='AlphaSense' src={as} variant='rounded' />
                                            </ListItemAvatar>
                                            <ListItemText primary="AlphaSense" />
                                        </ListItemButton>
                                    </ListItem> */}
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }}>
                                            <ListItemAvatar>
                                                <Avatar alt='ubc' src={ubc} variant='rounded' />
                                            </ListItemAvatar>
                                            <ListItemText primary="University of British Columbia" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Paper>
                            <Paper elevation={3} sx={{ height: 'auto', padding: 4, borderRadius: 5, marginY: 2 }}>
                                <Typography variant='h5'>Location</Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ display: 'flex', justifyContent: 'center', borderRadius: 5, padding: 2 }}>
                                            <ListItemIcon>
                                                <LocationOn />
                                            </ListItemIcon>
                                            <ListItemText primary="Vancouver, BC" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            {children}
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const About = () => {
    const backgroundImage = 'https://lh3.googleusercontent.com/D3-OahttrL-yH62XV-Ss1HzQWT1RaCeAowh_b24TSPUbfilOv559cGrzrExTklxin0oOrZ4RlyPYe85coUMZDSTCqgMOlsofyLm3RKFzhwONddZRf8X_=w2400-rj';
    const [value, setValue] = React.useState(0);
    const [search, setSearch] = React.useState('');
    const [type, setType] = React.useState(10);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const TagMap = {
        10: 'All',
        20: 'Technical',
        30: 'Fictional',
    };
    
    return (
        <Box sx={{bgcolor: 'background.main', margin: 0}}>
            <Card className="card" sx={{
                height: '440px',
                borderRadius: 5,
                margin: 2
            }}>
                <CardMedia
                    component="img"
                    height={250}
                    image={backgroundImage}
                    alt="about bg"
                />
                <CardHeader
                    avatar={<Avatar className="avatar" src={peep} sx={{ width: '10em', height: '10em', border: '5px solid white' }} />}
                    sx={{ zIndex: 2, position: 'relative', top: '-10em', marginX: 2 }}
                />
                <CardContent sx={{ position: 'relative', top: '-12em', marginX: 2, marginY: 0 }}>
                    <Typography variant="h4" color="textPrimary" className="name">
                        Sparsh Trivedy
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="bio">
                        Senior CS Student @ UBC
                    </Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" sx={{ marginY: 2 }}>
                        <Tab label="About" {...a11yProps(0)} />
                        <Tab label="Gallery" {...a11yProps(1)} />
                        <Tab label="Contact" {...a11yProps(2)} />
                    </Tabs>
                </CardContent>
            </Card>
            <CustomTabPanel value={value} index={0}>
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 5, width: 'auto'  }}>
                    <Typography variant="h5" color="textPrimary">
                        About
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                        Hello, my name is Sparsh and I am a final year CS major at UBC, where I am currently a TA for an Applied Machine Learning course.
                        I find joy in learning new technologies and using them to build cool projects! My self-learning is driven by a curiosity to explore new things.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                        I have previously worked as a Software Developer co-op at BGC Engineering where I worked on a risk assessment and management platform for Engineers. I have also done a Work-Learn with the Faculty of Forestry at UBC where I worked on developing the TA application portal.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                        When I'm not immersed in code, I like to explore the outdoors and try out new cafes. I have also learnt Tabla, an Indian classical instrument for over 9 years and have even played at several venues.
                    </Typography>
                </Paper>
                <Paper component="form" elevation={3} sx={{ marginY: 2, padding: 4, borderRadius: 5, width: 'auto', display: 'flex', alignItems: 'center' }}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value={10}>All</MenuItem>
                            <MenuItem value={20}>Technical</MenuItem>
                            <MenuItem value={30}>Fictional</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        sx={{ ml: 1, flexGrow: 1, borderRadius: 5 }}
                        placeholder="Search Posts"
                        label="Search"
                        variant="outlined"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                </Paper>
                {writings
                .filter((writing) => {
                    if (type === 10 && writing.title.toLowerCase().includes(search.trim().toLowerCase())) {
                        return writing;
                    } else if (writing.tag === TagMap[type] && writing.title.toLowerCase().includes(search.trim().toLowerCase())) {
                        return writing;
                    } else {
                        return null;
                    }
                })
                .map((writing) => (
                    <WritingCard 
                        key={writing.id}
                        image={writing.image}
                        title={writing.title} 
                        description={writing.description} 
                        id={writing.id} 
                        tag={writing.tag}
                    />
                ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Paper elevation={3} sx={{ borderRadius: 5, height: '98%', padding: 2 }}>
                    <Typography variant="h5" color="textPrimary" sx={{ margin: 2 }}>
                        Gallery
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <ImageList sx={{ width: '100%', height: '880px', borderRadius: 5, marginBottom: 2 }} cols={3}>
                        {picturelist.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                                }
                            />
                        </ImageListItem>
                        ))}
                    </ImageList>
                </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Connect />
            </CustomTabPanel>
        </Box>
    );
};

export default About;
