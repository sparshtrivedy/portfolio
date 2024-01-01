import React from 'react';
import { 
    Paper, 
    ListItemButton, 
    ListItem, 
    ListItemText, 
    Divider, 
    Typography ,
    Box,
    ListSubheader
} from '@mui/material';
import { courses, currentTerm } from '../../data/courses';

export default function CourseList() {
    return(
        <Paper sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            height: '55vh',
            borderRadius: '20px',
        }}>
            <Typography variant='h5' sx={{margin: 2}} textAlign={'center'}>Relevant courses</Typography>
            <Divider sx={{width: '100%'}} />
            <ListSubheader>Currently taking</ListSubheader>
            <Divider sx={{width: '100%'}} />
            {currentTerm.map((course) => (
                <Box key={course.title}>
                    <ListItemButton>
                        <ListItem>
                            <ListItemText primary={course.description} secondary={`${course.term} ${course.title}`} />
                        </ListItem>
                    </ListItemButton>
                    <Divider />
                </Box>
            ))}

            <ListSubheader>Completed courses</ListSubheader>
            <Divider sx={{width: '100%'}} />
            {courses.map((course) => (
                <Box key={course.title}>
                    <ListItemButton>
                        <ListItem>
                            <ListItemText primary={course.description} secondary={`${course.term} ${course.title}`} />
                        </ListItem>
                    </ListItemButton>
                    <Divider />
                </Box>
            ))}
        </Paper>
    );
}