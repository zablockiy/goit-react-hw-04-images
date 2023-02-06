import  {Component} from 'react';
import {createPortal} from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown);
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if(e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render () {
    return createPortal (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.url} alt=""/>
        </div>
      </div>,
      modalRoot,
    );
  }}
