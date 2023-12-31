import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';
import { useLocation } from 'react-router-dom';
import experiencestimeline from '../../data/experiencestimeline';

export default function ExperienceTimeline() {
    const location = useLocation();
    const [focussed, setFocussed] = useState(false);

    useEffect(() => {
        const sectionTitle = location.hash.substring(1);
        if (sectionTitle) {
          setFocussed(sectionTitle);
        } else {
          setFocussed(false);
        }
    }, [location]);

    return (
        <Timeline position="alternate" sx={{mb: 2}}>
            {experiencestimeline.map((experience, index) => (
            <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                    {experience.duration}
                </TimelineOppositeContent>
                <TimelineSeparator >
                    <TimelineConnector />
                    {focussed && focussed === experience.id? (
                        <TimelineDot color='primary'>
                            {experience.icon}
                        </TimelineDot>
                    ): (
                        <>
                          {experience.icon}
                        </>
                    )}
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '35px', px: 2 }}>
                    <Typography>
                        {experience.title}
                    </Typography>
                    <Typography variant='caption'>
                        {experience.location}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            ))}
        </Timeline>
    );
}
