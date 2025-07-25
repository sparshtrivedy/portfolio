import {
    Box, Chip,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {blue, green, grey} from "@mui/material/colors";
import {WorkOutlineOutlined, SchoolOutlined, CalendarTodayOutlined} from "@mui/icons-material";

const Experience = () => {
    return (
        <Box id={"experience"} sx={{ pb: 6, bgcolor: grey[50] }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '4rem',
                }}
            >
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Experience & Education
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
                    My professional journey, academic background, and key achievements that have shaped my skills and prepared me for a career in software engineering.
                </Typography>
            </Box>
            <Grid container spacing={4} columns={12} sx={{ mx: 'auto', px: 2, justifyContent: 'center' }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                            <WorkOutlineOutlined sx={{ fontSize: 24, color: 'white' }} />
                        </div>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: grey[800] }}>
                            Work Experience
                        </Typography>
                    </Box>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            borderLeft: '5px solid #0070f3',
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Research Assistant
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                University of British Columbia
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                May 2025 - Present
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[600] }}>
                            Vancouver, BC
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
                                mt: 1,
                            }}
                        >
                            <li>Architected a React+FastAPI+PostgreSQL platform, to queue quantum-chemistry jobs on a Slurm HPC cluster–enabling 100+ concurrent submissions with sub-second latency and asynchronous status polling.</li>
                            <li>Engineered an AWS S3-backed molecule library with tagging, notes, and auto-formula population, to enable users to search, filter, and organize structures–cutting new-job attachment time to under 2s.</li>
                            <li>Integrated role-based access control, to allow admins to create groups and manage users, group admins to manage memberships, and members to join and interact–enforcing fine-grained permissions for every action.</li>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {['AWS', 'Python', 'FastAPI', 'TypeScript', 'React', 'PostgreSQL', 'Auth0'].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        bgcolor: blue[50],
                                        color: blue[700],
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            borderLeft: '5px solid #0070f3',
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Software Engineering Intern
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                AlphaSense
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                May 2024 - Dec 2024
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[600] }}>
                            Vancouver, BC
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
                                mt: 1,
                            }}
                        >
                            <li>Created 10 validation checks and autofixes, to catch and rectify common user mistakes–identified through support requests–boosting financial model accuracy and enabling seamless model uploads.</li>
                            <li>Developed a shortcut for splitting and merging earnings tables with automated conflict resolution, to boost user efficiency–reducing modification time from ∼ 20 minutes to a single click.</li>
                            <li>Added a changelog-parsing step to the release pipeline to streamline releases by grouping changes by epic and posting notes to Slack–saving engineers ∼ 30 minutes of manual work per cycle.</li>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {['TypeScript', 'C#', '.NET', 'Python', 'AWS', 'React'].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        bgcolor: blue[50],
                                        color: blue[700],
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            borderLeft: '5px solid #0070f3',
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Applied Machine Learning Teaching Assistant
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                University of British Columbia
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                Sep 2023 - Apr 2024
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[600] }}>
                            Vancouver, BC
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
                                mt: 1,
                            }}
                        >
                            <li>Automated answer extraction from ∼ 350 Jupyter submissions into a single file by building a parser, to cut grading time–saving graders ∼ 2 hours per assignment.</li>
                            <li>Hosted weekly office hours to assist students with course material, to clarify concepts and provide guidance on assignments–improving student understanding and performance.</li>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {['Python', 'Scikit-learn', 'NumPy', 'Pandas'].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        bgcolor: blue[50],
                                        color: blue[700],
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            borderLeft: '5px solid #0070f3',
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Learning Tech Rover
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                University of British Columbia
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                May 2023 - Aug 2023
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[600] }}>
                            Vancouver, BC
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
                                mt: 1,
                            }}
                        >
                            <li>Redesigned the TA application portal’s Django UI, to improve layout, navigation, and visual cues–making the interface more intuitive and user-friendly and reducing user onboarding time.</li>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {['Python', 'Django', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'SQL' ].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        bgcolor: blue[50],
                                        color: blue[700],
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            borderLeft: '5px solid #0070f3',
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Software Developer Co-op
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                BGC Engineering
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                Sep 2022 - Apr 2023
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[600] }}>
                            Vancouver, BC
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
                                mt: 1,
                            }}
                        >
                            <li>Designed an interactive table handling thousands of instrumentation records, to link entries to map locations and support filtering, editing, and new-record creation–streamlining data management and navigation.</li>
                            <li>Implemented a selective data-copying feature that reused overlapping information from previous inspections, to avoid repetitive data entry–saving users ∼ 75% of time per new inspection.</li>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {['.NET', 'C#', 'TypeScript', 'React', 'MS SQL Server', 'Azure DevOps'].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        bgcolor: blue[50],
                                        color: blue[700],
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                            <SchoolOutlined sx={{ fontSize: 24, color: 'white' }} />
                        </div>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: grey[800] }}>
                            Education
                        </Typography>
                    </Box>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            mb: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ color: grey[800], mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                            Bachelor of Science in Computer Science
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-semibold">
                                University of British Columbia
                            </span>
                        </div>
                        <Typography variant="body2" sx={{ color: grey[700], my: 1 }}>
                            Vancouver, BC
                        </Typography>
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-500 text-sm flex items-center">
                                <CalendarTodayOutlined sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                Sep 2021 - Dec 2025 (Expected)
                            </span>
                        </div>
                        <Chip
                            label="GPA: 4.0 / 4.33"
                            size="small"
                            sx={{
                                my: 1.5,
                                bgcolor: green[50],
                                color: green[700],
                                fontWeight: 500,
                                p: 1
                            }}
                        />
                        <div>
                            <span className="text-gray-600 text-sm font-semibold">
                                Relevant Coursework:
                            </span>
                        </div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                            {['Data Structures and Algorithms', 'Software Engineering', 'Database Systems',
                                'Machine Learning', 'Distributed Systems', 'Operating Systems', 'Computer Networks',
                                'Visualization'].map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        fontWeight: 500,
                                        color: grey[700],
                                        borderRadius: 1,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Experience;