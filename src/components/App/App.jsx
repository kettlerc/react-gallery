import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
          galleryList={galleryList}
        />
      </div>
    );
}

export default App;
