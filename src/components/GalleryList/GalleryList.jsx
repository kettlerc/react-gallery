
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, photoLikes}) {
    return (
        <>
        <div>
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
        </div>
        </>
    )
}

export default GalleryList;