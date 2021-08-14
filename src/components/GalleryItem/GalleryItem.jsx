function GalleryItem ({photo}) {
    return (
        <>
        <div>
            <img src={photo.path}/>
            <div>
                <button>Like!</button>
                <h3>0 likes</h3>
            </div>
        </div>
        </>
    )
}

export default GalleryItem;