import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
    Typography,
    Box,
    Tab,
    Tabs,
    Grid
} from "@mui/material";
import HeaderCard from '../../components/HeaderCard';
import WritingCard from "./WritingCard";
import { writings, fictional } from "../../data/writings";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Writings() {
    const backgroundImage = 'https://lh3.googleusercontent.com/pR75LC3YTcz6E8rmRyB0FvLZPrvqzHwa-cHtTrrBe3yrNo1YUZLXQzHzvOKVGZZjjoc75U-KG8cvGFUthsfuYBugrUm5MKZNwvH37cw4NqM8EzkPCBI=w1400-v0';

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setChecked(true)
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{bgcolor: 'background.main', margin: 0, width: '100%'}}>
            <HeaderCard backgroundImage={backgroundImage} checked={checked} title={'Writings'} />
            <Box sx={{ margin: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Technical" {...a11yProps(0)} />
                        <Tab label="Non-technical" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Grid container spacing={2}>
                        {writings.map((writing) => (
                            <Grid item xs={12} sm={6} md={4} key={writing.id}>
                                <WritingCard 
                                    key={writing.id}
                                    image={writing.image}
                                    title={writing.title} 
                                    description={writing.description} 
                                    id={writing.id} 
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Grid container spacing={2}>
                        {fictional.map((writing) => (
                            <Grid item xs={12} sm={6} md={4} key={writing.id}>
                                <WritingCard 
                                    key={writing.id}
                                    image={writing.image}
                                    title={writing.title} 
                                    description={writing.description} 
                                    id={writing.id} 
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}

