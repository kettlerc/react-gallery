import { useState } from "react";

function GalleryItem ({data, photo, photoLikes}) {

    const [photoOrDescription, setPhotoOrDescription] = useState(true);

    const photoLiked = () => {
        photoLikes(data.id)
    }

    const togglePhoto = () => {
        console.log('SWITCH');

    }

    return (
        <>
        <div>
            <img src={photo.path} onClick={togglePhoto}/>
            <div>
                <button onClick={photoLiked}>Like!</button>
                <h3>{photo.likes} likes</h3>
            </div>
        </div>
        </>
    )
}

export default GalleryItem;