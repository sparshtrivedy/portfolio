import React, { useState, useEffect, useRef, createRef } from 'react';
import { 
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
    Toolbar,
    AppBar,
    CssBaseline,
    Avatar,
    Divider,
} from '@mui/material';
import { 
    Link, 
    Routes, 
    Route, 
    useLocation 
} from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import TitleCard from './HomeTab/Home';
import About from './AboutTab/About';
import Skills from './SkillsTab/Skills';
import Experience from './ExperienceTab/Experience';
import Projects from './ProjectsTab/Projects';
import Volunteering from './VolunteeringTab/Volunteering';
import Education from './EducationTab/Education';
import Connect from './ConnectTab/Connect';
import Writings from './WritingsTab/Writings';
import menuitems from '../data/menuitems';
import Singleton from './WritingsTab/Technical/Singleton';
import Strategy from './WritingsTab/Technical/Strategy';
import sparsh from '../assets/images/sparsh.jpg';
import Comments from './WritingsTab/Technical/Comments';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../App'
import Callbacks from './WritingsTab/Technical/Callbacks';
import NotFound from './NotFound/NotFound';

function AppSkeleton() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const drawerWidth = 150;

    const location = useLocation();

    const sectionsRef = useRef([]);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [focussed, setFocussed] = useState('');

    useEffect(() => {
        const currentLocation = location.pathname.split('/')[1] === ''? 'home': location.pathname.split('/')[1];
        setFocussed(currentLocation);
    }, [location.pathname]);

    const initializeRefs = (num) => {
        sectionsRef.current = Array(num).fill().map((_, index) => sectionsRef.current[index] || createRef());
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{bgcolor: 'secondary.main', m: 0}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Avatar alt='sparsh trivedy' src={sparsh} sx={{ width: '3em', height: '3em' }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                {menuitems.map((item) => (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }} key={item.id}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} selected={focussed === item.id}>
                            {item.icon}
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                ))}
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        <ListItemText primary={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', bgcolor: 'background.main', height: '100vh' }}>
            {initializeRefs(3)}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'background.main' }}
                aria-label="mailbox folders"
            >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        display: { sm: 'none' },
                        bgcolor: 'secondary.main',
                        color: 'text.primary'
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }}}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant={'h6'}>
                            Sparsh Trivedy
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'secondary.main' },
                        height: '100%'
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'secondary.main' },
                        height: '100vh'
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '96vh', mt: { sm: 0, xs: '8vh' }, bgcolor: 'background.main'}}
            >
                <Routes>
                    <Route path="/" element={<TitleCard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/volunteering" element={<Volunteering />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/connect' element={<Connect />} />
                    <Route path='/writings' element={<Writings />} />
                    <Route path='/writings/singleton' element={<Singleton />} />
                    <Route path='/writings/strategy' element={<Strategy />} />
                    <Route path='/writings/comments' element={<Comments />} />
                    <Route path='/writings/callbacks' element={<Callbacks />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default AppSkeleton;
