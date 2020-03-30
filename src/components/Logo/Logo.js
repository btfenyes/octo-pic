import React from 'react';
import styles from './Logo.module.css';

const Logo = props => (
  <div className={styles.Logo} onClick={props.click} style={props.style}>
    <h2 className={styles.LogoText}>OctoPic</h2>
  </div>
);

export default Logo;