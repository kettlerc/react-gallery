import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@material-ui/core/Grid";


function GalleryList({galleryList, photoLikes, fetchGallery, deletePhoto}) {
    return (
        <div>
            <Grid container>
                {galleryList.map(gallery => {
                    return (
                        <Grid 
                            item key={gallery.id} 
                            xs={12} 
                            md={6} 
                            lg={4}
                        >
                            <GalleryItem
                            key={gallery.id}
                            data={gallery}
                            photo={gallery}
                            photoLikes={photoLikes}
                            fetchGallery={fetchGallery}
                            deletePhoto={deletePhoto}
                            />
                         </Grid>

                        )
            })}
            </Grid>
        </div>
    )
}

export default GalleryList;