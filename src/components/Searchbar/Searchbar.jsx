import React, { Component } from "react";

import styles from './searchbar.module.css';


export default class Searchbar extends Component {
  state = {
    imgName: ''
  }

  handleChangeName = e => {
   
       this.setState({ imgName: e.currentTarget.value.toLowerCase() })
    
   
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imgName);
    // this.setState({ imgName: '' })

  };


  render() {
    return (
      <header className={styles.header}>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            Search
          </button>


          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeName}
            value={this.state.imgName}
          />
        </form>
      </header>
    );
  }

}

