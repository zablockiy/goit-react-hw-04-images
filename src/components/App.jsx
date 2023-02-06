import React, { Component } from 'react';
import  Searchbar  from './Searchbar/Searchbar';
import  ImageGallery  from './ImageGallery/ImageGallery';
import  Loader  from './Loader/Loader';
import  Button  from './Button/Button';
import  Modal  from './Modal/Modal';
import styles from './app.module.css';

import * as API from '../api/api';



export default class App extends Component {


  state = {
    page: 1,
    searchName: '',
    largeImg: '',
    items: [],
    isLoading: false,
    error: null,
  }

  openModalOpen = (imgURL) => {
    this.setState({
      largeImg:imgURL,
    })
  }

  onModalClose = () => {
    this.setState({
      largeImg: '',
    })
  }

  handleFormSubmit = (searchName) => {
    if(searchName.trim().length === 0) {
      alert('Please, enter request');
      return;
    }
    if (searchName ===this.state.searchName) {
      alert('Please, enter new request');
      return;
    }

    this.setState({
      searchName,
      page: 1,
      items: [],
    })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  getImages = async (searchName, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await API.loadImage(searchName, page);

      this.setState(prevState => ({
        items: [...prevState.items, ...images],
        isLoading: false,
      }));
      if (images.length === 0) {
        alert("Sorry, we can't find anyting for your request. Please, enter another request");
      }
    } catch (error) {
      this.setState({
        error: error.message,
      })
    }  finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName) {
      this.getImages(this.state.searchName, this.state.page);
    }
  }



  render() {
    const { items, largeImg, isLoading, error,searchName} = this.state;

    return (
      <div className={styles.wrapper}>
        <Searchbar onSubmit={this.handleFormSubmit} isLoading={isLoading}/>
        {error && <p>{error}</p>}
        {items.length > 0 &&  <ImageGallery items={items}  onClick={this.openModalOpen} searchName={searchName}/>}
        {isLoading && <Loader />}
        {items.length >= 12 && <Button onClick={this.handleLoadMore} isLoading={isLoading}/>}
        {largeImg && (<Modal onClose={this.onModalClose} url={largeImg}/>)}
      </div>
    );
  }
}

