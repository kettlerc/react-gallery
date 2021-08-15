import { useState } from "react";

function GalleryItem ({data, photo, photoLikes, deletePhoto, fetchGallery}) {

    const [photoOrDescription, setPhotoOrDescription] = useState(true);

    const togglePhotoClick = () => {
        console.log('SWITCH');
        setPhotoOrDescription(!photoOrDescription);
    }

    const togglePhoto = () => {
        if (photoOrDescription) {
            return <img src={photo.path} onClick={togglePhotoClick}/>
        } else {
            return <p onClick={togglePhotoClick}>{photo.description}</p>
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
            <div className="photodes">
            {togglePhoto()}
            </div>
            <div className="buttonlikes">
                <button onClick={photoLiked}>Like!</button>
                <button onClick={photoDeleted}>Delete</button>
                <h3>{photo.likes} likes</h3>
            </div>
        </>
    )
}

export default GalleryItem;