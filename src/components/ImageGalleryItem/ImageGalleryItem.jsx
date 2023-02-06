import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL,
                            searchName,
                            onClick,
                            largeImg, }) => {
  return (
      <img className={styles.image} src={webformatURL}  alt={searchName} onClick={()=> onClick(largeImg)} data-src={largeImg}/>

  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  searchName:PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

