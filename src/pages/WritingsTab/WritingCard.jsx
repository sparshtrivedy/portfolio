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
    
} from "@mui/material";
import { 
    FileOpenOutlined, 
    ShareOutlined,
    InventoryOutlined
} from "@mui/icons-material";

export default function WritingCard({ image, title, description, id }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <Card sx={{ maxWidth: {xs: '100%', sm: 500}, borderRadius: '20px', mb: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 340 }}
                    image={image}
                    title="singleton"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component={"div"}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{mb: 2}}>
                    <Button size="small" onClick={copyToClipboard} id={id} sx={{mr: 2}}>
                        <ShareOutlined sx={{mr: 1}} />
                        Share
                    </Button>
                    <Button size="small" href={`/#/writings/${id}`}>
                        <FileOpenOutlined sx={{mr: 1}} />
                        Read
                    </Button>
                </CardActions>
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert icon={<InventoryOutlined />} severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    )
}
