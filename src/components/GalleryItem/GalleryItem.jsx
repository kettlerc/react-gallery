function GalleryItem ({data, photo, photoLikes}) {

    const photoLiked = () => {
        photoLikes(data.id)
    }

    return (
        <>
        <div>
            <img src={photo.path}/>
            <div>
                <button onClick={photoLiked}>Like!</button>
                <h3>0 likes</h3>
            </div>
        </div>
        </>
    )
}

export default GalleryItem;