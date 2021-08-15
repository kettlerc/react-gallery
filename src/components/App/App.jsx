//importing necessary components
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import Typography from '@material-ui/core/Typography';

function App() {
  //defining state
  const [galleryList, setGalleryList] = useState([]);
  const [photoLikes, setPhotoLikes] = useState(0);

  //call fetchGallery function on load of page
  useEffect(() => {
    fetchGallery();
  }, []);

  //GET request
  const fetchGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('GET received', response.data);
      setGalleryList(response.data);
    }).catch(error => {
      console.log('GET error', error);
    });
  }; //END GET request

  //POST request
  const postPhoto = (newPhoto) => {
    Axios({
      method: 'POST',
      url: '/gallery',
      data: newPhoto
    }).then(response => {
      console.log('POST photo', response);
      fetchGallery();
    }).catch(error => {
      console.log('POST error', error);
    });
  }; //END POST request

  //PUT request
  const likePhoto = (id) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then(response => {
      console.log('PUT like', response);
      setPhotoLikes(response.data)
      fetchGallery();
    }).catch (error => {
      console.log('PUT error', error);
    });
  }; //END PUT request

  //DELETE request
  const deletePhoto = (id) => {
    console.log('ID is', id);
    Axios({
      method: 'DELETE',
      url: `/gallery/${id}`
    }).then(response => {
      console.log('DELETEd photo');
    }).catch(error => {
      console.log('DELETE error', error);
    });
  }; //END DELETE request

    //HTML being returned to 'root'
    return (
      <div className="App">
        <header className="App-header">
          <Typography 
            variant="h1"
            color="primary"
            align="center"
          >
          GALLERY OF MY LIFE
          </Typography>
        </header>
        {/* Form component with props*/}
        <GalleryForm 
          postPhoto={postPhoto}
          fetchGallery={fetchGallery}
        />
        {/* List component with props */}
        <GalleryList
          galleryList={galleryList}
          photoLikes={likePhoto}
          deletePhoto={deletePhoto}
          fetchGallery={fetchGallery}
        />
      </div>
    );
}

//exporting component
export default App;
