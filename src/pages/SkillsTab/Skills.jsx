
import React from 'react';
import { 
    Typography, 
    Paper, 
    Box, 
    Tab, 
    Tabs, 
    Card, 
    CardMedia, 
    CardContent, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemAvatar, 
    Avatar, 
    ListItemButton, 
    Divider, 
    Link, 
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import PropTypes from 'prop-types';
import skills from '../../data/skills.js';
import HeaderCard from '../../components/HeaderCard';

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
                <Box sx={{ p: 3 }}>
                    <Typography>
                        {children}
                    </Typography>
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

export default function Skills() {
    const backgroundImage = 'https://lh3.googleusercontent.com/2OrUzHCRSI-V46Z1qJBh90usG6OkKwCbXN80FbrjkWoQz4VfoJjNAoQHLHPQRZWH7dI_m5I1gi48h6xMJ5pK6kkdXmUnXPe4VqwvEdo4QeWRjLV9Oew=w2400-rj';

    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        setChecked(true)
    }, []);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSelectChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Box sx={{bgcolor: 'background.main', margin: 0}}>
            <HeaderCard backgroundImage={backgroundImage} checked={checked} title={'Skills'} />
            <Box sx={{margin: 2}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { sm: 'block', xs: 'none' } }}>
                    <Tabs
                        value={value}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Languages" {...a11yProps(0)} />
                        <Tab label="Back-end" {...a11yProps(1)} />
                        <Tab label="Front-end" {...a11yProps(2)} />
                        <Tab label="Database" {...a11yProps(3)} />
                        <Tab label="Cloud" {...a11yProps(4)} />
                        <Tab label="ML / Data Analysis" {...a11yProps(5)} />
                        <Tab label="Overarching" {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { sm: 'none', xs: 'block' } }}>
                    <FormControl sx={{width: '100%', mb: 1}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Category"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={0}>Languages</MenuItem>
                            <MenuItem value={1}>Back-end</MenuItem>
                            <MenuItem value={2}>Front-end</MenuItem>
                            <MenuItem value={3}>Database</MenuItem>
                            <MenuItem value={4}>Cloud</MenuItem>
                            <MenuItem value={5}>ML / Data Analysis</MenuItem>
                            <MenuItem value={6}>Overarching</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.languages.map((language) => (
                            <Card key={language.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={language.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {language.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {language.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.backend.map((framework) => (
                            <Card key={framework.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={framework.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {framework.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {framework.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.frontend.map((language) => (
                            <Card key={language.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={language.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {language.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {language.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.database.map((dbms) => (
                            <Card key={dbms.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={dbms.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {dbms.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {dbms.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.cloud.map((platform) => (
                            <Card key={platform.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={platform.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {platform.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {platform.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    <Box style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {skills.ml.map((library) => (
                            <Card key={library.name} sx={{ width: {xs: '100%', sm: 250}, marginBottom: 2, borderRadius: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt="express.js logo"
                                    height="140"
                                    image={library.img}
                                    sx={{bgcolor: 'media.main'}}
                                />
                                <CardContent sx={{bgcolor:'secondary.main', height: '100%'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {library.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Demonstrated in:
                                        <List>
                                            {library.demonstrated.map((project) => (
                                                <ListItem key={project.name} sx={{paddingLeft: 0}}>
                                                    <Link href={project.link}>{project.name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))} 
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={6}>
                    <Paper elevation={3} sx={{ width: '100%', bgcolor: 'secondary.main', borderRadius: '20px' }}>
                        {skills.overarching.map((skill) => (
                            <Box key={skill.name}>
                                <ListItemButton>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar>
                                            {skill.avatar}
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={skill.name} />
                                    </ListItem>
                                </ListItemButton>
                               {skill.divider && <Divider />}
                            </Box>
                        ))}
                    </Paper>
                </CustomTabPanel>
            </Box>
        </Box>
    );
};
