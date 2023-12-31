import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Grid,
    Button
} from '@mui/material';
import { 
    GitHub,
    OpenInNew,
    ExpandMore
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectMediaViewer from './ProjectMediaViewer';
import projects from '../../data/projects';

export default function ProjectsAccordian() {
    const location = useLocation();
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            navigate(`/projects/#${panel}`);
        } else {
            navigate('/projects');
        }
    };

    useEffect(() => {
        const sectionTitle = location.hash.substring(1);
        if (sectionTitle) {
            setExpanded(sectionTitle);
        }
    }, [location]);

    return (
        <div>
            {projects.map((project) => (
            <Accordion expanded={expanded === project.id} onChange={handleChange(project.id)} key={project.id}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`${project.title}-panel`}
                    id={project.id}
                    sx={{padding: 2}}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {project.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {project.duration}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'stretch'}}>
                        <Grid item xs={7}>
                            <AccordionDetails>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                                    <Typography color={'text.secondary'}>{project.skills}</Typography>
                                </div>
                            </AccordionDetails>
                            <AccordionDetails>
                                <ul>
                                    {project.description.map((point, index) => (
                                        <li key={`${project.id}-${index}`}><Typography>{point}</Typography></li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                            <Grid container sx={{width: '100%'}} spacing={2}>
                                <Button 
                                    variant="contained" 
                                    sx={{padding: 2, borderRadius: '20px', marginY: 4, marginX: 2, paddingX: 4}} 
                                    startIcon={<GitHub />} 
                                    href={project.github}
                                    disabled={project.github === ''}
                                >
                                    GitHub
                                </Button>
                                <Button 
                                    variant="contained" 
                                    sx={{padding: 2, borderRadius: '20px', marginY: 4, paddingX: 4}}
                                    startIcon={<OpenInNew />} 
                                    href={project.view}
                                    disabled={project.view === ''}
                                >
                                    View
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <ProjectMediaViewer media={project.media} />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            ))}
        </div>
    );
}