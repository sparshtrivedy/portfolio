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
            <Card sx={{ borderRadius: '20px', mb: 2, height: '100%' }}>
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
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert icon={<InventoryOutlined />} severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    )
}
