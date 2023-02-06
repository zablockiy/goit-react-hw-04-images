import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './loader.module.css';


const Loader = props => (
  <ContentLoader
    className={styles.loader}
    viewBox="0 0 400 160"
    height={160}
    width={400}
    speed={2}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

Loader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three dots',
  filename: 'Loader',
};

export default Loader;
