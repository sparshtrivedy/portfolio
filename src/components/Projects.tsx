import {
    Box, Button, Card, CardContent, CardMedia, Chip, Grid, Stack,
    Typography
} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import connectubc from "../assets/connectubc.png"
import fairfare from "../assets/fairfare.jpeg"
import playbook from "../assets/playbook.jpeg";
import get_it_together from "../assets/get-it-together.jpeg";
import { GitHub } from "@mui/icons-material";

const Projects = () => {
    return (
        <Box id={"projects"} sx={{ paddingBottom: '4rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '4rem',
                }}
            >
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Featured Projects
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
                    A showcase of my recent work demonstrating technical skills, problem-solving abilities, and passion for creating impactful software solutions.
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                columns={12}
                sx={{ mx: 'auto', px: 2, justifyContent: 'center', mb: 3 }}
            >
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                                transform: 'scale(1.02)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '& .project-title': {
                                    color: 'oklch(0.546 0.245 262.881)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={connectubc}
                            alt="Project Thumbnail"
                            sx={{ borderRadius: 1, marginBottom: 2 }}
                        />
                        <CardContent>
                            <Typography gutterBottom className="project-title" variant="h5" component="div" sx={{ fontWeight: 600, color: grey[800] }}>
                                ConnectUBC
                            </Typography>
                            <Typography
                                component="ul"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                    listStyleType: 'disc',
                                    pl: 4,
                                    m: 0,
                                }}
                            >
                                <li>Built an AI‑powered RAG chatbot using Gemini’s LLM and MongoDB Atlas vector search, to enable natural‑language queries—cutting content‑discovery time by ∼70%.</li>
                                <li>Introduced Auth0‑based authentication with UBC‑email whitelisting and auto‑verification, to restrict access to verified students—eliminating manual vetting and blocking 100% of bogus sign‑ups.</li>
                                <li>Designed a React profile builder, to capture student interests, courses (via Workday calendar upload), and residence—persisted in MongoDB—driving a more personalized feed.</li>
                            </Typography>
                            <Box>
                                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ marginTop: 2 }}>
                                    {['React', 'Express.js', 'MongoDB', 'Gemini API', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Material UI'
                                    ].map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                backgroundColor: blue[50],
                                                color: 'oklch(0.546 0.245 262.881)',
                                                fontWeight: 500,
                                                borderRadius: 5,
                                                fontSize: '0.875rem',
                                                margin: '2px',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                                transform: 'scale(1.02)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '& .project-title': {
                                    color: 'oklch(0.546 0.245 262.881)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={fairfare}
                            alt="Project Thumbnail"
                            sx={{ borderRadius: 1, marginBottom: 2 }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="project-title"
                                sx={{ fontWeight: 600, color: grey[800] }}
                            >
                                FairFare
                            </Typography>
                            <Typography
                                component="ul"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                    listStyleType: 'disc',
                                    pl: 4,
                                    m: 0,
                                }}
                            >
                                <li>Eliminated need for manual bill splitting by delivering a mobile-responsive React+Firebase serverless app that auto-calculates shares for both single purchases and multi-item events, then syncs settled payments.</li>
                                <li>Developed a dashboard leveraging Firestore queries for bar-chart visualizations and summary views, offering immediate insights into monthly settlements, outstanding balances, and who owes whom.</li>
                            </Typography>
                            <Box>
                                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ marginTop: 2 }}>
                                    {['React', 'Firebase', 'JavaScript'].map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                backgroundColor: blue[50],
                                                color: 'oklch(0.546 0.245 262.881)',
                                                fontWeight: 500,
                                                borderRadius: 5,
                                                fontSize: '0.875rem',
                                                margin: '2px',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                                transform: 'scale(1.02)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '& .project-title': {
                                    color: 'oklch(0.546 0.245 262.881)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={playbook}
                            alt="Project Thumbnail"
                            sx={{ borderRadius: 1, marginBottom: 2 }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="project-title"
                                sx={{ fontWeight: 600, color: grey[800] }}
                            >
                                PlayBook
                            </Typography>
                            <Typography
                                component="ul"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                    listStyleType: 'disc',
                                    pl: 4,
                                    m: 0,
                                }}
                            >
                                <li>Created cloud-hosted sports management platform, deployed on AWS EC2, utilizing RDS for PostgreSQL database and Nginx for reverse proxy.</li>
                                <li>Promoted data integrity through role-based access control for managers and administrators, ensuring users could only perform CRUD operations on data relevant to their role.</li>
                                <li>Optimized DB structure by implementing weak entity relationships and ISA hierarchies, minimizing redundancy by normalizing to BCNF.</li>
                            </Typography>
                            <Box>
                                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ marginTop: 2 }}>
                                    {['PostgreSQL', 'Express.js', 'React', 'AWS EC2', 'AWS RDS'].map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                backgroundColor: blue[50],
                                                color: 'oklch(0.546 0.245 262.881)',
                                                fontWeight: 500,
                                                borderRadius: 5,
                                                fontSize: '0.875rem',
                                                margin: '2px',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                                transform: 'scale(1.02)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '& .project-title': {
                                    color: 'oklch(0.546 0.245 262.881)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={get_it_together}
                            alt="More Projects Thumbnail"
                            sx={{ borderRadius: 1, marginBottom: 2 }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="project-title"
                                sx={{ fontWeight: 600, color: grey[800] }}
                            >
                                Get-It-Together
                            </Typography>
                            <Typography
                                component="ul"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                    listStyleType: 'disc',
                                    pl: 4,
                                    m: 0,
                                }}
                            >
                                <li>Ensured data security through password hashing and salting and JWT web token-based authentication and authorization.</li>
                                <li>Personalized user experience by implementing a dashboard allowing users to track of the status of their tasks and their progress over time.</li>
                                <li>Improved user experience by implementing a search feature allowing users to search for tasks by name, status, and type.</li>
                            </Typography>
                            <Box sx={{ marginTop: 2 }}>
                                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ marginTop: 2 }}>
                                    {['MongoDB', 'Express.js', 'React', 'JavaScript'].map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                backgroundColor: blue[50],
                                                color: 'oklch(0.546 0.245 262.881)',
                                                fontWeight: 500,
                                                borderRadius: 5,
                                                fontSize: '0.875rem',
                                                margin: '2px',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
                <Typography variant="body2" sx={{ fontSize: '1rem', color: grey[600], textAlign: 'center', lineHeight: 1.5 }}>
                    Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
                </Typography>
                <Button
                    variant="contained"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                    sx={{
                        textTransform: "none",
                        borderRadius: "2rem",
                        p: "0.75rem 2rem",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        fontSize: "1rem",
                        mt: 3,
                    }}
                    onClick={() => {
                        window.open('https://github.com/sparshtrivedy');
                    }}
                    startIcon={<GitHub fontSize="large" />}
                >
                    View GitHub Profile
                </Button>
            </Box>
        </Box>
    );
};

export default Projects;