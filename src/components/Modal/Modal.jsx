import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const  Modal =({onClose, imageModal }) => {

 
  useEffect(() => {
       const handleKeyDown = e => {
    if (e.code === 'Escape') {
        onClose();
        }
    };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
    },[onClose])
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
  
  return (
    createPortal(
      <div className={styles.overlay} onClick={handleBackdropClick}>
        <div className={styles.modal}>
          <img src={imageModal} alt=""/>
        </div>
      </div>,
      modalRoot,
    ))
}
  
export default Modal;

  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imageModal: PropTypes.string.isRequired
}

