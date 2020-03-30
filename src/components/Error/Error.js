import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.Error}>
      <h2>Something went wrong :(</h2>
      {/* <p>Error: {props.error}</p> */}
    </div>
  );
};

export default Error;