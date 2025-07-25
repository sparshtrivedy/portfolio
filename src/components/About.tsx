import {Avatar, Box, Grid, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import sparsh from "../assets/sparsh.jpeg";
import {AdjustOutlined, CodeOutlined, PeopleAltOutlined, SchoolOutlined} from "@mui/icons-material";

const About = () => {
    return (
        <Box id={"about"} sx={{ paddingBottom: '4rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '4rem',
                }}
            >
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                    About Me
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
                    I'm a dedicated Computer Science student with a passion for creating innovative software solutions
                    that make a real impact. My journey in tech has been driven by curiosity and a desire to solve
                    complex problems through code.
                </Typography>
            </Box>
            <Grid
                container
                spacing={4}
                columns={12}
                sx={{ mx: 'auto', px: 2, alignItems: 'center', justifyContent: 'center' }}
            >
                <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                            <Avatar src={sparsh} alt="Sparsh Trivedy" sx={{ width: 150, height: 150, border: '4px solid #fff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }} />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl opacity-20"></div>
                    </div>
                </Grid>

                <Grid size={{ xs: 12, md: 5, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', maxWidth: '600px' }}>
                        <Typography sx={{ fontSize: '1.1rem', color: grey[700], lineHeight: 1.6 }}>
                            Currently in my final year of Computer Science studies, I've developed a strong foundation
                            in software engineering principles, data structures, and algorithms. My academic journey
                            has been complemented by hands-on projects and internships that have shaped my practical
                            skills.
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', color: grey[700], lineHeight: 1.6, mt: 3 }}>
                            I'm particularly interested in full-stack web development, cloud computing, and building
                            user-centric applications. My goal is to join a dynamic team where I can contribute to
                            meaningful projects while continuing to grow as a software engineer.
                        </Typography>

                        <Grid container spacing={2} columns={12} sx={{ mt: 3 }}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 2, height: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                                            <CodeOutlined sx={{ fontSize: 32, color: 'white' }} />
                                        </div>
                                        <h6 className="text-lg font-semibold text-gray-800">
                                            Full-Stack Development
                                        </h6>
                                    </Box>
                                    <Typography sx={{ fontSize: '0.9rem', color: grey[700], lineHeight: 1.5 }}>
                                        Proficient in modern web technologies including React, Node.js, and cloud platforms.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 2, height: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                                            <SchoolOutlined sx={{ fontSize: 32, color: 'white' }} />
                                        </div>
                                        <h6 className="text-lg font-semibold text-gray-800">
                                            Computer Science
                                        </h6>
                                    </Box>
                                    <Typography sx={{ fontSize: '0.9rem', color: grey[700], lineHeight: 1.5 }}>
                                        Senior CS student with strong foundation in algorithms, data structures, and software engineering.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 2, height: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                                            <AdjustOutlined sx={{ fontSize: 32, color: 'white' }} />
                                        </div>
                                        <h6 className="text-lg font-semibold text-gray-800">
                                            Problem Solving
                                        </h6>
                                    </Box>
                                    <Typography sx={{ fontSize: '0.9rem', color: grey[700], lineHeight: 1.5 }}>
                                        Passionate about tackling complex challenges and building efficient, scalable solutions.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 2, height: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                                            <PeopleAltOutlined sx={{ fontSize: 32, color: 'white' }} />
                                        </div>
                                        <h6 className="text-lg font-semibold text-gray-800">
                                            Team Collaboration
                                        </h6>
                                    </Box>
                                    <Typography sx={{ fontSize: '0.9rem', color: grey[700], lineHeight: 1.5 }}>
                                        Experience working in agile teams and contributing to open-source projects.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;