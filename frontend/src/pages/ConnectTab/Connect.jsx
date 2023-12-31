
import React from 'react';
import axios from 'axios';
import { 
    Typography, 
    Paper, 
    Fade, 
    Grid, 
    Box, 
    TextField, 
    Divider, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    ListItemIcon, 
    Alert, 
    Button, 
    LinearProgress 
} from '@mui/material';
import { 
    LinkedIn,
    GitHub, 
    ContactMail, 
    AlternateEmail, 
    Instagram, 
    ContactPage, 
    PersonAdd 
} from '@mui/icons-material';

const idMap = {
    'firstname': 'your first name',
    'lastname': 'your last name',
    'email': 'your email',
    'company': 'your company name',
    'pronouns': 'your pronouns',
    'linkedin': 'your LinkedIn profile',
    'message': 'a message'
}

const requiredIds = ['firstname', 'lastname', 'email', 'message'];

export default function Connect() {
    const backgroundImage = 'https://lh3.googleusercontent.com/Hyd9Ea7nfmAIsP0YdygYsGn38uSoe_tAvkBU9d3uPfBLiJ6ILuvOFousDmp0kXPPoWZrOHotDn4800B7Wp2cidBxor_fBN3nNxDmw9jehZId3XVyrkw=w2400-rj';

    const [checked, setChecked] = React.useState(false);
    const [result, setResult] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const [isError, setIsError] = React.useState({
        firstname: false,
        lastname: false,
        email: false,
        message: false,
        linkedin: false
    });
    
    const [errors, setErrors] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        linkedin: ''
    });

    React.useEffect(() => {
        setChecked(true)
    }, []);

    const handleSubmit = async () => {
        setLoading(true);
        const newIsError = {};
        const newErrors = {};

        const data = {
            service_id: process.env.REACT_APP_SERVICE_ID,
            template_id: process.env.REACT_APP_TEMPLATE_ID,
            user_id: process.env.REACT_APP_USER_ID,
            template_params: {
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                pronouns: document.getElementById('pronouns').value,
                linkedin: document.getElementById('linkedin').value,
                message: document.getElementById('message').value
            }
        }

        for (const id of requiredIds) {
            const element = document.getElementById(id);
            if (element === null || element.value.trim() === '') {
                newIsError[id] = true;
                newErrors[id] = `This is a required field`;
            }
        }

        if (newIsError.firstname || newIsError.lastname || newIsError.email || newIsError.message || newIsError.linkedin) {
            setResult({
                message: 'Please fill out all required fields',
                severity: 'error'
            });
            setTimeout(() => {setResult(null)}, 5000);
            setLoading(false);
        } else {
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then((response) => {
                setLoading(false);
                setResult({
                    message: response.data.message,
                    severity: 'success'
                });
                setTimeout(() => {setResult(null)}, 5000);
            }).catch((error) => {
                setLoading(false);
                setResult({
                    message: error.data,
                    severity: 'error'
                });
                setTimeout(() => {setResult(null)}, 5000);
            });
        }
        setIsError(prevState => ({ ...prevState, ...newIsError }));
        setErrors(prevState => ({ ...prevState, ...newErrors }));
    }

    const handleInputChange = (e) => {
        if (requiredIds.includes(e.target.id) && !e.target.value) {
          setIsError(prevState => ({ ...prevState, [e.target.id]: true }));
          setErrors(prevState => ({ ...prevState, [e.target.id]: `Please enter ${idMap[e.target.id]}` }));
        } else if (e.target.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(e.target.value)) {
                setIsError(prevState => ({ ...prevState, [e.target.id]: true }));
                setErrors(prevState => ({ ...prevState, [e.target.id]: `Please enter a valid email` }));
            } else {
                setIsError(prevState => ({ ...prevState, [e.target.id]: false }));
            }
        } else if (e.target.id === 'linkedin') {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            if (!urlRegex.test(e.target.value)) {
                setIsError(prevState => ({ ...prevState, [e.target.id]: true }));
                setErrors(prevState => ({ ...prevState, [e.target.id]: `Please enter a valid URL` }));
            } else {
                setIsError(prevState => ({ ...prevState, [e.target.id]: false }));
            }
        } else {
          setIsError(prevState => ({ ...prevState, [e.target.id]: false }));
        }
    }
    
    return (
        <div style={{backgroundColor: '#f8fafd'}}>
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
                <Fade in={checked} timeout={1000}><Typography variant='h2' sx={{fontWeight: 500}}>Connect</Typography></Fade>
            </Paper>
            <Box
                component="form"
                sx={{margin: 2}}
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={2} sx={{height: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={7}>
                        <Paper elevation={3} sx={{height:'98%', padding: 2, marginBottom: 2, borderRadius: '20px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 1 }}>
                                <ContactMail sx={{ mr: 1, my: 0.5 }} />
                                <Typography variant='h5'>Contact me</Typography>
                            </Box>
                            <Divider sx={{marginBottom: 2, width: '100%'}} />
                            {loading && <LinearProgress sx={{marginBottom: 2}} />}
                            {result && <Alert severity={result.severity} sx={{padding: 2, marginY: 2, borderRadius: '20px'}}>
                                {result.message}
                            </Alert>}
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <TextField
                                    required
                                    error={isError.firstname}
                                    helperText={isError.firstname && errors.firstname}
                                    id="firstname"
                                    label="First name"
                                    sx={{width: '49%', marginBottom: 2}}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    required
                                    error={isError.lastname}
                                    helperText={isError.lastname && errors.lastname}
                                    id="lastname"
                                    label="Last name"
                                    sx={{width: '49%', marginBottom: 2}}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <TextField
                                    required
                                    error={isError.email}
                                    helperText={isError.email && errors.email}
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    sx={{marginBottom: 2}}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <TextField
                                    fullWidth
                                    id="company"
                                    label="Company"
                                    sx={{width: '49%', marginBottom: 2}}
                                />
                                <TextField
                                    fullWidth
                                    id="pronouns"
                                    label="Pronouns"
                                    sx={{width: '49%', marginBottom: 2}}
                                />
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <TextField
                                    fullWidth
                                    error={isError.linkedin}
                                    helperText={isError.linkedin && errors.linkedin}
                                    id="linkedin"
                                    label="LinkedIn"
                                    sx={{marginBottom: 2}}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <TextField
                                    fullWidth
                                    required
                                    error={isError.message}
                                    helperText={isError.message && errors.message}
                                    id="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    sx={{marginBottom: 2}}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <Button variant='contained' sx={{width: '150px', borderRadius: '20px', padding: 2}} onClick={handleSubmit}>Send</Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper elevation={3} sx={{height: '98%', padding: 2, marginBottom: 2, borderRadius: '20px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 1 }}>
                                <PersonAdd sx={{ mr: 1, my: 0.5 }} />
                                <Typography variant='h5'>Socials</Typography>
                            </Box>
                            <Divider sx={{width: '100%'}} />
                            <Alert severity="info" sx={{padding: 2, marginTop: 2, borderRadius: '20px'}}>
                                The best way to reach me is through email. I typically respond within 48 hours. I look forward to hearing from you!
                            </Alert>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{padding: 2}}>
                                        <ListItemIcon>
                                            <AlternateEmail />
                                        </ListItemIcon>
                                        <ListItemText primary="Mail" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{padding: 2}}>
                                        <ListItemIcon>
                                            <LinkedIn />
                                        </ListItemIcon>
                                        <ListItemText primary="LinkedIn" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{padding: 2}}>
                                        <ListItemIcon>
                                            <GitHub />
                                        </ListItemIcon>
                                        <ListItemText primary="GitHub" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{padding: 2}}>
                                        <ListItemIcon>
                                            <Instagram />
                                        </ListItemIcon>
                                        <ListItemText primary="Instagram" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{padding: 2}}>
                                        <ListItemIcon>
                                            <ContactPage />
                                        </ListItemIcon>
                                        <ListItemText primary="Resume" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
