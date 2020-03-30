import React from 'react';
import styles from './Input.module.css';

const Input = props => (
  <input type={props.type} className={styles.Input} onChange={props.change} value={props.value} placeholder={props.placeholder} />
);

export default Input;