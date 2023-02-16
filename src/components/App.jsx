import React, { useEffect, useState } from 'react';
import  Searchbar  from './Searchbar/Searchbar';
import  ImageGallery  from './ImageGallery/ImageGallery';
import  Loader  from './Loader/Loader';
import  Button  from './Button/Button';
import  Modal  from './Modal/Modal';
import styles from './app.module.css';

import * as API from '../api/api';



const App =()=> {

  const [page, setPage]=useState(1);
  const [searchName, setSearchName] = useState('');
  const [largeImg, setLargeImg] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const openModalOpen = (imgURL) => {
    setLargeImg(imgURL);
  }

  const onModalClose = () => {
    setLargeImg('');
  }

  const handleFormSubmit = (searchName) => {
    if(searchName.trim().length === 0) {
      alert('Please, enter request');
      return;
    }
    setSearchName(searchName);
    setPage(1);
    setItems([])
  }

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1)
  }

  useEffect(() => {
    
    if (!searchName) return;

    const getImages = async (searchName, page) => {
      try {
        setIsLoading(true)
        const images = await API.loadImage(searchName, page);


        setItems(prevState => [...prevState, ...images]);
        setIsLoading(false);
        if (images.length === 0) {
          alert("Sorry, we can't find anyting for your request. Please, enter another request");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getImages(searchName, page);
  }, [searchName,page])



    return (
      <div className={styles.wrapper}>
        <Searchbar onSubmit={handleFormSubmit} isLoading={isLoading}/>
        {error && <p>{error}</p>}
        {items.length > 0 &&  <ImageGallery items={items}  onClick={openModalOpen} searchName={searchName}/>}
        {isLoading && <Loader />}
        {items.length >= 12 && <Button onClick={handleLoadMore} isLoading={isLoading}/>}
        {largeImg && (<Modal onClose={onModalClose} url={largeImg}/>)}
      </div>
    );

}

export default App;


