import React from 'react';
import styles from './Result.module.css';

const Result = props => {
  return (
    <div className={styles.Result} onClick={() => props.click(props.image)}>
      <img src={props.image.urls.small} alt=""/>
    </div>
  )
}

export default Result;
