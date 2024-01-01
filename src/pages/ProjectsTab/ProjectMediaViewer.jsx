import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    MobileStepper,
    Paper,
    Typography,
    Button,
} from '@mui/material';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

export default function ProjectMediaViewer({media}) {
    const maxSteps = media.length;

    const theme = useTheme();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '20px', bgcolor: 'secondary.main'}} elevation={3}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    bgcolor: 'transparent'
                }}
            >
                <Typography>{media[activeStep].label}</Typography>
            </Paper>
            {media[activeStep].type === 'image'?
                <img src={media[activeStep].item} style={{width: '100%'}} alt={media[activeStep].label} />:
                <video src={media[activeStep].item} style={{width: '100%'}} controls />
            }
            <MobileStepper
                sx={{bgcolor: 'transparent'}}
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                        ) : (
                        <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Paper>
    );
}
