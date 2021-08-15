import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


function GalleryItem ({data, photo, photoLikes, deletePhoto, fetchGallery}) {

    const [photoOrDescription, setPhotoOrDescription] = useState(true);

    const togglePhotoClick = () => {
        console.log('SWITCH');
        setPhotoOrDescription(!photoOrDescription);
    }

    const togglePhoto = () => {
        if (photoOrDescription) {
            return <Card variant="outlined">
                        <CardMedia 
                            component="img"
                            image={photo.path} 
                            onClick={togglePhotoClick}
                        />
                    </Card>
        } else {
            return <Card variant="outlined">
                        <CardContent onClick={togglePhotoClick}>
                            <Typography
                                variant="body1"
                            >{photo.description}
                            </Typography>
                        </CardContent>
                    </Card>
        }
    }

    const photoLiked = () => {
        photoLikes(data.id)
    }

    const photoDeleted = () => {
        deletePhoto(data.id);
        fetchGallery();
    }

    return (
        <>
        <div className="photoDiv">
            <div className="photodes">
            {togglePhoto()}
            </div>
            <div className="buttonlikes">
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={photoLiked}
                    startIcon={<ThumbUpIcon />}
                >Like!
                </Button>
                <Button 
                    variant="outlined"
                    color="secondary"
                    onClick={photoDeleted}
                    startIcon={<DeleteOutlineIcon />}
                >Delete
                </Button>
                <Typography variant="h6">{photo.likes} LIKES</Typography>
            </div>
        </div>
        </>
    )
}

export default GalleryItem;