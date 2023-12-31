import React from "react";
import PropTypes from 'prop-types';
import {
    Typography,
    Paper,
    Fade,
    Box,
    Tab,
    Tabs,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
} from "@mui/material";
import singleton from '../../assets/writings/singleton.png'
import strategy from '../../assets/writings/strategy.png'
import codecomments from '../../assets/writings/codecomments.png'

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

    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {setChecked(true)}, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{backgroundColor: '#f8fafd', margin: 0}}>
            <Paper elevation={3}
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    flexDirection: 'column',
                    margin: 2
                }}
            >
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500}}>Writings</Typography></Fade>
            </Paper>
            <Box sx={{ margin: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Technical" {...a11yProps(0)} />
                        <Tab label="Fictional" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Card sx={{ maxWidth: 500, borderRadius: '20px', mb: 2 }}>
                            <CardMedia
                                sx={{ height: 340 }}
                                image={singleton}
                                title="singleton"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Singleton Design Pattern
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The singleton design pattern is a creational design pattern that restricts the instantiation of a class to exactly one object.
                                    This is a very simple and easy to use design pattern; however, it is often overused and misused.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginBottom: 2}}>
                                <Button size="small" href="/writings/singleton">Share</Button>
                                <Button size="small" href="/writings/singleton">Read</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 500, borderRadius: '20px', mb: 2 }}>
                            <CardMedia
                                sx={{ height: 340 }}
                                image={strategy}
                                title="strategy"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Strategy Design Pattern
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The strategy design pattern is a behavioral design pattern that enables selecting an algorithm at runtime.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginBottom: 2}}>
                                <Button size="small" href="/writings/strategy">Share</Button>
                                <Button size="small" href="/writings/strategy">Read</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 500, borderRadius: '20px', mb: 2 }}>
                            <CardMedia
                                sx={{ height: 340 }}
                                image={codecomments}
                                title="code comments"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Do I need comments in my code?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Are you using comments to explain what your code does? If so, you are doing it wrong.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginBottom: 2}}>
                                <Button size="small" href="/writings/comments">Share</Button>
                                <Button size="small" href="/writings/comments">Read</Button>
                            </CardActions>
                        </Card>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Coming soon...
                </CustomTabPanel>
            </Box>
        </div>
    );
}

