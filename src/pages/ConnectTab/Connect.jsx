
import React from 'react';
import axios from 'axios';
import { 
    Typography, 
    Paper, 
    TextField, 
    Divider, 
    Alert, 
    Button, 
    LinearProgress 
} from '@mui/material';

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
            setTimeout(() => {setResult(null)}, 6000);
            setLoading(false);
        } else {
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then((response) => {
                setLoading(false);
                setResult({
                    message: 'Your message has been sent!',
                    severity: 'success'
                });
                setTimeout(() => {setResult(null)}, 6000);
            }).catch((error) => {
                setLoading(false);
                setResult({
                    message: 'There was an error sending your message. Please try again later.',
                    severity: 'error'
                });
                setTimeout(() => {setResult(null)}, 6000);
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
        <Paper elevation={3} sx={{ borderRadius: 5, height: '600px', padding: 2 }}>
            <Typography variant="h5" color="textPrimary" sx={{ margin: 2 }}>
                Contact
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            {loading && <LinearProgress sx={{ marginBottom: 2 }} />}
            {result && <Alert severity={result.severity} sx={{padding: 2, marginY: 2, borderRadius: '20px'}}>
                {result.message}
            </Alert>}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 2, marginBottom: 4 }}>
                <Button variant='contained' sx={{ width: '150px', padding: 1, borderRadius: 2 }} onClick={handleSubmit}>Send</Button>
            </div>
        </Paper>
    );
}
