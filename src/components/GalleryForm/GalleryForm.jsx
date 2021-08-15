import {useState} from 'react';

function GalleryForm({postPhoto}) {

    let [newPhotoPath, setNewPhotoPath] = useState('');
    let [newPhotoDescription, setNewPhotoDescription] = useState('');
    let [newPhotoLikes, setNewPhotoLikes] = useState(0);

    const onFormSubmit = (event) => {
        event.preventDefault();

        let newPhoto = {
            path: newPhotoPath,
            description: newPhotoDescription,
            likes: newPhotoLikes
        }

        postPhoto(newPhoto);
        setNewPhotoPath('');
        setNewPhotoDescription('');
        setNewPhotoLikes(0);
    }

    return (
        <>
        <h2>Add more photos!</h2>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="URL:">URL:</label>
            <input
                type="text"
                placeholder="photo url goes here"
                value={newPhotoPath}
                onChange={event => setNewPhotoPath(event.target.value)}
            />
            <label htmlFor="Description:">Description:</label>
            <input 
                type="text"
                placeholder="Describe your photo here"
                value={newPhotoDescription}
                onChange={event => setNewPhotoDescription(event.target.value)}
            />
            <button>Add Photo</button>
        </form>
        </>
    )
}

export default GalleryForm;