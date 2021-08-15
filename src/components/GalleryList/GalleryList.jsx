
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, photoLikes, fetchGallery, deletePhoto}) {
    return (
        <>
            {galleryList.map(gallery => {
                return (
                    <GalleryItem
                        key={gallery.id}
                        data={gallery}
                        photo={gallery}
                        photoLikes={photoLikes}
                        fetchGallery={fetchGallery}
                        deletePhoto={deletePhoto}
                    />
                )
            })}
        </>
    )
}

export default GalleryList;