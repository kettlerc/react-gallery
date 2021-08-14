function GalleryItem ({photo}) {
    return (
        <>
        <div>
            <img src={photo.path}/>
        </div>
        </>
    )
}

export default GalleryItem;