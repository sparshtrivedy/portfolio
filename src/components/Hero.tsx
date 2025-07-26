import { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ExpandMore, FileDownloadOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import resume from "../assets/Sparsh_Trivedy_SWE_Resume_2025.pdf"

const Hero = () => {
    const titles = [
        "Software Engineer",
        "Full-Stack Developer",
        "CS Student",
        "Builder",
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = titles[currentTitleIndex];
        const typingSpeed = isDeleting ? 60 : 100;

        const timeout = setTimeout(() => {
            setDisplayText((prev) => {
                if (isDeleting) return prev.slice(0, -1);
                return fullText.slice(0, prev.length + 1);
            });

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTitleIndex]);

    return (
        <Box id={"home"} sx={{ position: "relative", overflow: "hidden", height: "100vh" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#eeebf5",
                    zIndex: 0,
                }}
            />
            {/* Gradient Blobs */}
            <Box sx={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "-40%",
                        left: "-20%",
                        width: "90vw",
                        height: "90vw",
                        bgcolor: "transparent",
                        background: "radial-gradient(circle, #7aa0ff 0%, transparent 70%)",
                        filter: "blur(120px)",
                        opacity: 0.6,
                        animation: "move1 20s infinite alternate",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-20%",
                        width: "80vw",
                        height: "80vw",
                        bgcolor: "transparent",
                        background: "radial-gradient(circle, #e4c4ff 0%, transparent 70%)",
                        filter: "blur(140px)",
                        opacity: 0.6,
                        animation: "move2 25s infinite alternate",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        width: "40vw",
                        height: "40vw",
                        bgcolor: "transparent",
                        background: "radial-gradient(circle, #b0bfff 0%, transparent 70%)",
                        filter: "blur(100px)",
                        opacity: 0.4,
                        animation: "move3 30s infinite alternate",
                    }}
                />
            </Box>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            {/* Content */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    padding: "0 2rem",
                }}
            >
                <Typography variant="h1" sx={{ fontSize: "4rem", marginBottom: "1.75rem", fontWeight: 600 }}>
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sparsh Trivedy
                    </span>
                </Typography>
                <Typography variant="h2" sx={{ fontSize: "1.5rem", color: "text.secondary", fontWeight: 500 }} className="flex items-center justify-center">
                    I'm a
                    <span className="text-blue-600 font-semibold ml-2">
                        {displayText}
                        <span className="animate-pulse ml-1">|</span>
                    </span>
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "1.5rem", maxWidth: "600px", color: "text.secondary", fontSize: "1.1rem" }}>
                    I am a CS senior at UBC with a keen interest in building innovative solutions. I love coding, learning new technologies, and collaborating on exciting projects.
                </Typography>
                <Box sx={{ marginTop: "2rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Button
                        variant="contained"
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                        sx={{
                            textTransform: "none",
                            borderRadius: "2rem",
                            p: "0.75rem 2rem",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            fontSize: "1.2rem",
                            mr: 2,
                        }}
                        startIcon={<FileDownloadOutlined fontSize="large" />}
                        href={resume}
                        target="_blank"
                        download="Sparsh_Trivedy_SWE_Resume_2025.pdf"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </Button>
                    <Button
                        variant="outlined"
                        className="group ml-4 px-8 py-4 border-blue-600 text-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
                        sx={{
                            textTransform: "none",
                            borderRadius: "2rem",
                            p: "0.75rem 2rem",
                            fontSize: "1.2rem",
                        }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                    >
                        Learn More
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 10,
                    width: "100%",
                    textAlign: "center",
                    color: grey[500],
                    zIndex: 1,
                }}
            >
                <p style={{ fontSize: "1rem" }}>Scroll down to explore more</p>
                <IconButton
                    sx={{ animation: "bounce 1s infinite", color: grey[500], mt: 1 }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                >
                    <ExpandMore fontSize="large" />
                </IconButton>
            </Box>

            <style>
                {`
                    @keyframes move1 {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-20px); }
                    }
                    @keyframes move2 {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(20px); }
                    }
                    @keyframes move3 {
                        0% { transform: scale(1); }
                        100% { transform: scale(1.1); }
                    }
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-7px); }
                    }
                `}
            </style>
        </Box>
    );
};

export default Hero;
