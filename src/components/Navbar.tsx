import { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {blue, grey} from "@mui/material/colors";
import { Menu } from '@mui/icons-material';

const navItems = [
    { id: 'home',      label: 'Home' },
    { id: 'about',     label: 'About' },
    { id: 'skills',    label: 'Skills' },
    { id: 'projects',  label: 'Projects' },
    { id: 'experience',label: 'Experience' },
    { id: 'contact',   label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(navItems[0].id);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleMobileMenu = () => {
        setMobileMenuOpen(open => !open);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
        if (isMobile) setMobileMenuOpen(false);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <AppBar
                position="fixed"
                elevation={scrolled ? 4 : 0}
                sx={{
                    backgroundColor: scrolled ? '#fff' : 'transparent',
                    transition: 'all 0.3s ease',
                    color: '#333',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
                    <Box
                        component="h1"
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Sparsh Trivedy
                    </Box>

                    {/* Desktop links */}
                    {!isMobile && (
                        <Box>
                            {navItems.map(({ id, label }) => {
                                const isActive = id === activeSection;
                                return (
                                    <Button
                                        key={id}
                                        onClick={() => handleNavClick(id)}
                                        size="small"
                                        sx={{
                                            ml: 2,
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            color: isActive ? 'primary.main' : grey[700],
                                            bgcolor: isActive ? blue[50] : 'transparent',
                                            '&:hover': {
                                                color: 'primary.main',
                                                borderColor: 'primary.main',
                                            },
                                        }}
                                    >
                                        {label}
                                    </Button>
                                );
                            })}
                        </Box>
                    )}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleMobileMenu}
                        >
                            <Menu />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            {isMobile && mobileMenuOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '64px',
                        right: 0,
                        width: '100%',
                        bgcolor: '#fff',
                        boxShadow: 3,
                        borderRadius: 1,
                        zIndex: 11
                    }}
                >
                    {navItems.map(({ id, label }) => {
                        const isActive = id === activeSection;
                        return (
                            <Button
                                key={id}
                                fullWidth
                                onClick={() => handleNavClick(id)}
                                sx={{
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    color: isActive ? 'primary.main' : grey[800],
                                    bgcolor: isActive ? blue[50] : 'transparent',
                                    px: 2,
                                    py: 1,
                                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                                }}
                            >
                                {label}
                            </Button>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
};

export default Navbar;
