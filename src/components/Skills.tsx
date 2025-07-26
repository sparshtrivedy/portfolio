import {
    Avatar,
    Box,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";

// Data for each category
const programmingLanguages = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Go",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "C",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
];

const frameworks = [
    { name: "React",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Django",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: ".NET",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
];

const databaseCloud = [
    { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLite",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "AWS",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const tools = [
    { name: "Git",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Linux",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Docker",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" },
    { name: "Postman",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const Skills = () => {
    return (
        <Box id="skills" sx={{ pb: 6, bgcolor: grey[50] }}>
            {/* Header */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 6 }}>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, mb: 1 }}>
                    Technical Skills
                </Typography>
                <Box
                    sx={{
                        width: 96,
                        height: 4,
                        borderRadius: 2,
                        background: 'linear-gradient(to right, #2563eb, #9333ea)',
                        mb: 4,
                    }}
                />
            </Box>

            {/* Intro Text */}
            <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6, px: 2 }}>
                <Typography
                    variant="body1"
                    sx={{ fontSize: '1.2rem', color: grey[800], textAlign: 'center', lineHeight: 1.5 }}
                >
                    A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
                </Typography>
            </Box>

            {/* Row 1: Languages & Frameworks */}
            <Grid
                container
                spacing={3}
                columns={12}
                sx={{ mx: 'auto', px: 2, justifyContent: 'center', mb: 3 }}
            >
                {[
                    { title: 'Programming Languages', items: programmingLanguages },
                    { title: 'Frameworks & Libraries',   items: frameworks },
                ].map((cat) => (
                    <Grid key={cat.title} size={{ xs: 12, md: 5 }}>
                        <Paper sx={{
                            p: 3,
                            borderRadius: 2,
                            '&:hover': {
                                boxShadow: 3,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }
                        }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, color: grey[800], mb: 2, textAlign: 'center' }}
                            >
                                {cat.title}
                            </Typography>
                            <Stack spacing={1}>
                                {cat.items.map((tech) => (
                                    <Box
                                        key={tech.name}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            p: 1,
                                            borderRadius: 1,
                                            bgcolor: '#fff',
                                            boxShadow: 1,
                                        }}
                                    >
                                        <Avatar
                                            src={tech.logo}
                                            alt={tech.name}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: 500, color: grey[800] }}
                                        >
                                            {tech.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Row 2: Web Dev & Databases */}
            <Grid
                container
                spacing={3}
                columns={12}
                sx={{ mx: 'auto', px: 2, justifyContent: 'center' }}
            >
                {[
                    { title: 'Database & Cloud', items: databaseCloud },
                    { title: 'Tools & Others',      items: tools },
                ].map((cat) => (
                    <Grid key={cat.title} size={{ xs: 12, md: 5 }}>
                        <Paper sx={{
                            p: 3,
                            borderRadius: 2,
                            '&:hover': {
                                boxShadow: 3,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }
                        }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, color: grey[800], mb: 2, textAlign: 'center' }}
                            >
                                {cat.title}
                            </Typography>
                            <Stack spacing={1}>
                                {cat.items.map((tech) => (
                                    <Box
                                        key={tech.name}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            p: 1,
                                            borderRadius: 1,
                                            bgcolor: '#fff',
                                            boxShadow: 1,
                                        }}
                                    >
                                        <Avatar
                                            src={tech.logo}
                                            alt={tech.name}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: 500, color: grey[800] }}
                                        >
                                            {tech.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
