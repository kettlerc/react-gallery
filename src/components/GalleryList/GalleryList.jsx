
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    return (
        <>
        <div>
            {galleryList.map(gallery => {
                return (
                    <GalleryItem
                        key={gallery.id}
                        photo={gallery}
                    />
                )
            })}
        </div>
        </>
    )
}

export default GalleryList;