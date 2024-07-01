import React, { useState } from "react";
import { 
    Typography,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Snackbar,
    Alert,
    Box,
    Chip
} from "@mui/material";
import { 
    FileOpenOutlined, 
    ShareOutlined,
    InventoryOutlined
} from "@mui/icons-material";

export default function WritingCard({ image, title, description, id, tag }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const copyToClipboard = async (e) => {
        const  url = `https://www.sparshtrivedy.com/#/writings/${e.target.id}`

        await navigator.clipboard.writeText(url)
        .then(() => {
            setOpenSnackbar(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <Card sx={{ display: 'flex', marginY: 2, borderRadius: 5 }} elevation={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component={"div"}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Box sx={{ marginTop: 2 }}>
                            {tag === 'Technical' ? 
                                <Chip label={tag} color="primary" /> :
                                <Chip label={tag} color="secondary" />
                            }
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={copyToClipboard} id={id} sx={{mr: 2}}>
                            <ShareOutlined sx={{mr: 1}} />
                            Share
                        </Button>
                        <Button size="small" href={`/#/writings/${id}`}>
                            <FileOpenOutlined sx={{mr: 1}} />
                            Read
                        </Button>
                    </CardActions>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '40%' }}
                    image={image}
                    title="singleton"
                />
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert icon={<InventoryOutlined />} severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    )
}
