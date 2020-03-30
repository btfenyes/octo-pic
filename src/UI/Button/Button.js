import React from 'react';
import styles from './Button.module.css';

const Button = props => (
  <button type={props.type} className={styles.Button} onClick={props.click} style={props.style} title={props.title}>{props.children}</button>
);

export default Button;