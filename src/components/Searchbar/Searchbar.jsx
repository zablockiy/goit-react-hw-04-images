import  { useState } from "react";
import PropTypes from 'prop-types';

import styles from './searchbar.module.css';


const Searchbar= ({onSubmit})=> {

  const [imgName, setImgName] = useState ('');


  const handleChangeName = e => {
    setImgName( e.currentTarget.value.toLowerCase())
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(imgName);
    // this.setState({ imgName: '' })

  };



    return (
      <header className={styles.header}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.button_text}>Find</span>
          </button>


          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChangeName}
            value={imgName}
          />
        </form>
      </header>
    );


}

export default  Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

