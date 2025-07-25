import {
    Box
} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";

const App = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Box>
        </Box>
    );
};

export default App
