import React from 'react';
import styles from './NoResult.module.css';

const NoResult = props => {
  return (
    <div className={styles.NoResult}>
      <p>No images were found for '{props.query}'.</p>
    </div>
  );
};

export default NoResult;
