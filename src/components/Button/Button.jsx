import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({onClick}) => {
  return (
    <div className='LoadMoreButton'>
      <button
        type='button'
        className={styles.button}
        onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
