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
import { blue, grey } from "@mui/material/colors";
import { Menu } from '@mui/icons-material';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(open => !open);
    };

    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
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
                            {navItems.map(({ id, label }) => (
                                <Button
                                    key={id}
                                    onClick={() => handleNavClick(id)}
                                    sx={{
                                        ml: 2,
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        color: grey[700],
                                        '&:hover': { color: 'primary.main' },
                                        '&:active': {
                                            color: blue[700],
                                            backgroundColor: 'rgba(33, 150, 243, 0.3)',
                                        },
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile hamburger */}
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

            {/* Mobile dropdown */}
            {isMobile && mobileMenuOpen && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '64px',         // height of AppBar
                        right: 0,
                        width: 200,
                        bgcolor: '#fff',
                        boxShadow: 3,
                        borderRadius: 1,
                        zIndex: 11
                    }}
                >
                    {navItems.map(({ id, label }) => (
                        <Button
                            key={id}
                            fullWidth
                            onClick={() => handleNavClick(id)}
                            sx={{
                                justifyContent: 'flex-start',
                                textTransform: 'none',
                                color: grey[800],
                                px: 2,
                                py: 1,
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Navbar;
