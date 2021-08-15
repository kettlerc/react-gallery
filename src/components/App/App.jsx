import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [photoLikes, setPhotoLikes] = useState(0);

  useEffect(() => {
    fetchGallery();
  }, []);

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
  };

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
  };

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
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryForm 
          postPhoto={postPhoto}
        />
        <GalleryList
          galleryList={galleryList}
          photoLikes={likePhoto}
        />
      </div>
    );
}

export default App;
