import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Paper from "@material-ui/core/Paper"


function GalleryItem ({data, photo, photoLikes, deletePhoto, fetchGallery}) {

    const [photoOrDescription, setPhotoOrDescription] = useState(true);

    const togglePhotoClick = () => {
        console.log('SWITCH');
        setPhotoOrDescription(!photoOrDescription);
    }

    const togglePhoto = () => {
        if (photoOrDescription) {
            return <img className="image" src={photo.path} onClick={togglePhotoClick}/>
        } else {
            return <Paper onClick={togglePhotoClick}>{photo.description}</Paper>
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