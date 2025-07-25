import { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box
} from '@mui/material';
import { blue, grey } from "@mui/material/colors";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={scrolled ? 4 : 0}
            sx={{
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 1.0)' : 'transparent',
                transition: 'all 0.3s ease',
                color: '#fff',
                top: 0,
                left: 0,
                zIndex: 10,
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold">
                    Sparsh Trivedy
                </h1>
                <Box>
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            color="primary"
                            sx={{
                                marginLeft: 2,
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '1rem',
                                color: grey[700],
                                '&:hover': {
                                    color: 'primary.main',
                                },
                                '&:active': {
                                    color: blue[700],
                                    backgroundColor: 'rgba(33, 150, 243, 0.3)',
                                },
                            }}
                            onClick={() => {
                                const section = document.getElementById(item.id);
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
