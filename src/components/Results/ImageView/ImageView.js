import React from 'react';
import styles from './ImageView.module.css';
import Button from '../../../UI/Button/Button';

const ImageView = props => {
  const image = props.result;
  const onViewFileClick = (url) => {
    window.open(url, '_blank');
  };
  const buttonStyle = {
    height: '2em',
    
  };
  return (
    <div className={styles.ImageView}>
      <div className={styles.ImageContainer}>
        <img src={image.urls.regular} alt={image.alt_description}/>
      </div>      
      <div className={styles.Data}>
        <p>{image.description}</p>
        <p>{image.width} x {image.height}</p>
        <Button click={() => onViewFileClick(image.links.html)} style={buttonStyle}>View File</Button>
        <p>by {image.user.name}</p>
      </div>
    </div>
  );
};

export default ImageView;