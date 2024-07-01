import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import experiences from '../../data/experiences';

export default function ExperienceAccordian() {
    const location = useLocation();
    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            navigate(`/experience/#${panel}`);
        } else {
            navigate('/experience');
        }
    };

    useEffect(() => {
        const sectionTitle = location.hash.substring(1);
        if (sectionTitle) {
        setExpanded(sectionTitle);
        }
    }, [location]);

    return (
        <>
            {experiences.map((experience) => (
            <Accordion expanded={expanded === experience.id} onChange={handleChange(experience.id)} key={experience.id}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`${experience.title}-panel`}
                    id={experience.id}
                    sx={{padding: 2}}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {experience.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {experience.location}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                        <Typography color={'text.secondary'}>{experience.skills}</Typography>
                        <Typography color={'text.secondary'}>{experience.duration}</Typography>
                    </div>
                </AccordionDetails>
                <AccordionDetails sx={{marginBottom: 2, marginX: 2}}>
                    <div>
                        <ul>
                            {experience.description.map((point, index) => (
                                <li key={`${experience.id}-${index}`}><Typography>{point}</Typography></li>
                            ))}
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            ))}
        </>
    );
}