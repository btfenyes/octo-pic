import React from 'react';
import styles from './LogoIcon.module.css';

const LogoIcon = props => {
  const style = {
    width: props.size,
    height: props.size
  }
  return (
    <div className={styles.LogoIcon}>
      <svg style={style} width="163" height="172" viewBox="0 0 163 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152 76C152 34.0264 117.974 0 76 0V0C34.0264 0 0 34.0264 0 76V140H152V76Z" fill="#009688"/>
        <path d="M151.696 138H135V163.043C135 167.654 138.737 171.391 143.348 171.391C147.958 171.391 151.696 167.654 151.696 163.043V138Z" fill="#009688"/>
        <path d="M118.696 138H102V163.043C102 167.654 105.737 171.391 110.348 171.391C114.958 171.391 118.696 167.654 118.696 163.043V138Z" fill="#009688"/>
        <path d="M84.6956 138H68V163.043C68 167.654 71.7374 171.391 76.3478 171.391C80.9582 171.391 84.6956 167.654 84.6956 163.043V138Z" fill="#009688"/>
        <path d="M50.6956 138H34V163.043C34 167.654 37.7374 171.391 42.3478 171.391C46.9582 171.391 50.6956 167.654 50.6956 163.043V138Z" fill="#009688"/>
        <path d="M16.6957 138.261H2.67029e-05V163.304C2.67029e-05 167.915 3.73748 171.652 8.34785 171.652C12.9582 171.652 16.6957 167.915 16.6957 163.304V138.261Z" fill="#009688"/>
        <circle r="18.7826" transform="matrix(-1 0 0 1 35.7826 84.7826)" fill="white"/>
        <ellipse cx="35.7329" cy="84.7329" rx="10.7329" ry="10.7329" transform="rotate(180 35.7329 84.7329)" fill="black"/>
        <circle r="18.7826" transform="matrix(-1 0 0 1 143.783 84.7826)" fill="white"/>
        <ellipse cx="143.733" cy="84.7329" rx="10.7329" ry="10.7329" transform="rotate(180 143.733 84.7329)" fill="black"/>
      </svg>
    </div>
  );
};

export default LogoIcon;