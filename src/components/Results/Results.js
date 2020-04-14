import React, {useState, Fragment} from 'react';
import styles from './Results.module.css';

import Result from './Result/Result';
import ImageView from './ImageView/ImageView';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

const Results = props => {
  const [inImageView, setInImageView] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const onImageClick = selectedImage => {
    setInImageView(!inImageView);
    setSelectedImage(selectedImage);
  };

  const onBackdropClick = () => {
    setInImageView(!inImageView);
  };

  const viewMoreBtnStyle = {
    width: '200px',
    margin: 'auto',
    height: '40px',
    fontSize: '28px',
    marginTop: '0.4em',
    marginBottom: '0.2em'
  };

  const images = props.images.map(elem => <Result key={elem.id} image={elem} click={onImageClick} />);

  let imageView = null;
  let viewMoreBtn = <Button click={props.loadMore} style={viewMoreBtnStyle}>View More</Button>;

  if(selectedImage){
    imageView = <ImageView result={selectedImage} />;
  }

  if(props.loading){
    viewMoreBtn = <Spinner />;
  }

  return (
    <Fragment>
      <div className={styles.Results}>
        <Modal show={inImageView} modalClose={onBackdropClick}>{imageView}</Modal>
        {images}        
      </div>
      <div className={styles.Pages}>
        {viewMoreBtn}       
      </div>
    </Fragment>
  );
};

export default Results;
