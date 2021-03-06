import React, {Fragment} from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  const style = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  };
  return (
    <Fragment>
      <Backdrop show={props.show} click={props.modalClose}></Backdrop> 
      <div className={styles.Modal} style={style}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
