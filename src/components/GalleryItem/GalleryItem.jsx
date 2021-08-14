import { useState } from "react";

function GalleryItem ({data, photo, photoLikes}) {

    const [photoOrDescription, setPhotoOrDescription] = useState(true);

    const photoLiked = () => {
        photoLikes(data.id)
    }

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

    return (
        <>
        <div>
            <div className="photodes">
            {togglePhoto()}
            </div>
            <div className="buttonlikes">
                <button onClick={photoLiked}>Like!</button>
                <h3>{photo.likes} likes</h3>
            </div>
        </div>
        </>
    )
}

export default GalleryItem;