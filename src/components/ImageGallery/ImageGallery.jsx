import React from 'react';
import PropTypes from 'prop-types';
import  ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ items, searchName, onClick }) => {
  return (
    <div>
      <ul className={styles.list}>
        {items.map(({ id, webformatURL, largeImageURL }) =>
          (<li className={styles.item} key={id}>
            <ImageGalleryItem  webformatURL={webformatURL} searchName={searchName} largeImg={largeImageURL} onClick={onClick} />
          </li>))}

      </ul>
    </div>

  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};




