import {EmailOutlined, OpenInNewOutlined, RoomOutlined} from "@mui/icons-material";
import { Github, Linkedin, Instagram } from 'lucide-react';
import {
    Box, Button, Divider,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";
import resume from "../assets/Sparsh_Trivedy_SWE_Resume_2025.pdf";

const Contact = () => {
    return (
        <Box id={"contact"} sx={{ paddingBottom: '4rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '4rem',
                }}
            >
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Get In Touch
                </Typography>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-2xl"></div>
            </Box>
            <Box
                sx={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    paddingBottom: '4rem',
                    paddingX: '1rem',
                }}
            >
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: grey[800], textAlign: 'center', lineHeight: 1.5 }}>
                    I'm currently seeking new graduate opportunities in software engineering. Let's connect and discuss how I can contribute to your team!
                </Typography>
            </Box>
            <Grid
                container
                spacing={4}
                columns={12}
                sx={{ mx: 'auto', px: 2, alignItems: 'center', justifyContent: 'center' }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: grey[800], mb: 2, fontSize: '1rem' }}
                    >
                        Let's Connect
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: grey[600], mb: 4 }}
                    >
                        I'm excited about opportunities to work on challenging projects and contribute to innovative teams. Whether you're a recruiter, hiring manager, or fellow developer, I'd love to hear from you!
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
                columns={12}
                sx={{ mx: 'auto', px: 2, alignItems: 'center', justifyContent: 'center' }}
            >
                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 1,
                            borderRadius: 2,
                            backgroundColor: grey[100],
                        }}
                        elevation={0}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                            <EmailOutlined sx={{ fontSize: 28, color: 'white' }} />
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                            <span className="text-gray-500 text-sm">
                                Email
                            </span>
                            <span className="text-gray-700 text-sm font-semibold">
                                [firstname].[lastname]2140@gmail.com
                            </span>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 1,
                            borderRadius: 2,
                            backgroundColor: grey[100],
                        }}
                        elevation={0}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                            <RoomOutlined sx={{ fontSize: 28, color: 'white' }} />
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                            <span className="text-gray-500 text-sm">
                                Location
                            </span>
                            <span className="text-gray-700 text-sm font-semibold">
                                Vancouver, BC
                            </span>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
                columns={12}
                sx={{ mx: 'auto', px: 2, mt: 4, alignItems: 'center', justifyContent: 'center' }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: grey[800], mb: 2, fontSize: '1rem' }}
                    >
                        Follow Me
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <div
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-2 hover:bg-gray-300 hover:cursor-pointer"
                            onClick={() => window.open('https://www.linkedin.com/in/sparshtrivedy/', '_blank')}
                        >
                            <Linkedin />
                        </div>
                        <div
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-2 hover:bg-gray-300 hover:cursor-pointer"
                            onClick={() => window.open('https://github.com/sparshtrivedy', '_blank')}
                        >
                            <Github />
                        </div>
                        <div
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-2 hover:bg-gray-300 hover:cursor-pointer"
                            onClick={() => window.open('https://www.instagram.com/sparshtrivedy/', '_blank')}
                        >
                            <Instagram />
                        </div>
                    </Box>
                    <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl p-6 border-0">
                        <span className="text-gray-700 text-md font-semibold">
                            Looking for my resume?
                        </span>
                        <Typography
                            variant="body2"
                            sx={{ color: grey[700], mt: 1 }}
                        >
                            Download my latest resume to learn more about my experience and qualifications.
                        </Typography>
                        <Button
                            variant="contained"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                p: "0.5rem 1.5rem",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                fontSize: "0.85rem",
                                mt: 2,
                            }}
                            endIcon={<OpenInNewOutlined />}
                            href={resume}
                            target="_blank"
                            download="Sparsh_Trivedy_SWE_Resume_2025.pdf"
                            rel="noopener noreferrer"
                        >
                            Download Resume
                        </Button>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 10 }}>
                    <Divider sx={{ my: 4, borderColor: grey[200] }} />
                    <Typography
                        variant="body2"
                        sx={{ color: grey[600], textAlign: 'center', fontSize: '0.875rem' }}
                    >
                        © {new Date().getFullYear()} Sparsh Trivedy. Built with React, MUI, Tailwind CSS.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;