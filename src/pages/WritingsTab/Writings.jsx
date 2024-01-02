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
    Snackbar,
    Alert,
} from "@mui/material";
import { FileOpenOutlined, InventoryOutlined, ShareOutlined } from "@mui/icons-material";
import singleton from '../../assets/writings/singleton.png'
import strategy from '../../assets/writings/strategy.png'
import codecomments from '../../assets/writings/codecomments.png'
import callbacks from '../../assets/writings/callbacks.jpg'

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
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    React.useEffect(() => {setChecked(true)}, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    };

    const copyToClipboard = async (e) => {
        let url = "https://www.sparshtrivedy.com/#/writings"
        if (e.target.id === 'comments') {
            url = "https://www.sparshtrivedy.com/#/writings/comments"
        } else if (e.target.id === 'strategy') {
            url = "https://www.sparshtrivedy.com/#/writings/strategy"
        } else if (e.target.id === 'singleton') {
            url = "https://www.sparshtrivedy.com/#/writings/singleton"
        } else if (e.target.id === 'callbacks') {
            url = "https://www.sparshtrivedy.com/#/writings/callbacks"
        }

        await navigator.clipboard.writeText(url)
        .then(() => {
            setOpenSnackbar(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <Box sx={{bgcolor: 'background.main', margin: 0, width: '100%'}}>
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
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500, color: '#212121'}}>Writings</Typography></Fade>
            </Paper>
            <Box sx={{ margin: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Technical" {...a11yProps(0)} />
                        <Tab label="Fictional" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Card sx={{ maxWidth: {xs: '100%', sm: 500}, borderRadius: '20px', mb: 2 }}>
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
                            <CardActions sx={{mb: 2}}>
                                <Button size="small" onClick={copyToClipboard} id="singleton" sx={{mr: 2}}>
                                    <ShareOutlined sx={{mr: 1}} />
                                    Share
                                </Button>
                                <Button size="small" href="/#/writings/singleton">
                                    <FileOpenOutlined sx={{mr: 1}} />
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: {xs: '100%', sm: 500}, borderRadius: '20px', mb: 2 }}>
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
                            <CardActions sx={{mb: 2}}>
                            <Button size="small" onClick={copyToClipboard} id="strategy" sx={{mr: 2}}>
                                    <ShareOutlined sx={{mr: 1}} />
                                    Share
                                </Button>
                                <Button size="small" href="/#/writings/strategy">
                                    <FileOpenOutlined sx={{mr: 1}} />
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: {xs: '100%', sm: 500}, borderRadius: '20px', mb: 2 }}>
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
                            <CardActions sx={{mb: 2}}>
                                <Button size="small" onClick={copyToClipboard} id="comments" sx={{mr: 2}}>
                                    <ShareOutlined sx={{mr: 1}} />
                                    Share
                                </Button>
                                <Button size="small" href="/#/writings/comments">
                                    <FileOpenOutlined sx={{mr: 1}} />
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: {xs: '100%', sm: 500}, borderRadius: '20px', mb: 2 }}>
                            <CardMedia
                                sx={{ height: 340 }}
                                image={callbacks}
                                title="code comments"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Callbacks and Async
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Callbacks are a way to make sure certain code doesn't execute until other code has already finished execution.
                                    However, callbacks can be a pain to work with. This article will explain how to use callbacks and how to avoid callback hell.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{mb: 2}}>
                                <Button size="small" onClick={copyToClipboard} id="callbacks" sx={{mr: 2}}>
                                    <ShareOutlined sx={{mr: 1}} />
                                    Share
                                </Button>
                                <Button size="small" href="/#/writings/callbacks">
                                    <FileOpenOutlined sx={{mr: 1}} />
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Coming soon...
                </CustomTabPanel>
            </Box>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert icon={<InventoryOutlined />} severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </Box>
    );
}

