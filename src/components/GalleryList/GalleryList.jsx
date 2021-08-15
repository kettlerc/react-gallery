
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, photoLikes}) {
    return (
        <>
            {galleryList.map(gallery => {
                return (
                    <GalleryItem
                        key={gallery.id}
                        data={gallery}
                        photo={gallery}
                        photoLikes={photoLikes}
                    />
                )
            })}
        </>
    )
}

export default GalleryList;