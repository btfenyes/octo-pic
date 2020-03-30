import React, {useState, useEffect} from 'react';
import styles from './Navbar.module.css';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../../UI/Button/Button';
import appStyles from '../../App.module.css';
import {ReactComponent as SunIcon} from '../../icons/sun.svg';

const Navbar = props => {
  const storedTheme = localStorage.getItem('theme') || 'light';

  const [theme, setTheme] = useState(storedTheme);

  const colors = {
    buttonLight: '#009688',
    buttonHoverLight: '#00796B',
    buttonDark: '#EF6C00',
    buttonHoverDark: '#E65100',
    backgroundLight: '#ffffff',
    backgroundDark: '#263238',
    navbarLight: '#F5F5F5',
    navbarDark: '#37474F',
    navbarBorderLight: '#EEEEEE',
    navbarBorderDark: '#424242',
    logoLight: '#000000',
    logoDark: '#ffffff',
    textLight: '#000000',
    textDark: '#ffffff'
  };

  const onChangeTheme = () => {
    const appStyle = document.getElementById(appStyles.App).style;
    if(theme === 'light'){
      appStyle.setProperty('--button-background', colors.buttonDark);
      appStyle.setProperty('--button-hover', colors.buttonHoverDark);
      appStyle.setProperty('--background', colors.backgroundDark);
      appStyle.setProperty('--navbar-background', colors.navbarDark);
      appStyle.setProperty('--navbar-border', colors.navbarBorderDark);
      appStyle.setProperty('--results-background', colors.backgroundDark);
      appStyle.setProperty('--logo-color', colors.logoDark);
      appStyle.setProperty('--text-color', colors.textDark);
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if(theme === 'dark'){
      appStyle.setProperty('--button-background', colors.buttonLight);
      appStyle.setProperty('--button-hover', colors.buttonHoverLight);
      appStyle.setProperty('--background', colors.backgroundLight);
      appStyle.setProperty('--navbar-background', colors.navbarLight);
      appStyle.setProperty('--navbar-border', colors.navbarBorderLight);
      appStyle.setProperty('--results-background', colors.backgroundLight);
      appStyle.setProperty('--logo-color', colors.logoLight);
      appStyle.setProperty('--text-color', colors.textLight);
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }
  };

  const onInitTheme = () => {
    const appStyle = document.getElementById(appStyles.App).style;
    if(theme === 'dark'){
      appStyle.setProperty('--button-background', colors.buttonDark);
      appStyle.setProperty('--button-hover', colors.buttonHoverDark);
      appStyle.setProperty('--background', colors.backgroundDark);
      appStyle.setProperty('--navbar-background', colors.navbarDark);
      appStyle.setProperty('--navbar-border', colors.navbarBorderDark);
      appStyle.setProperty('--results-background', colors.backgroundDark);
      appStyle.setProperty('--logo-color', colors.logoDark);
      appStyle.setProperty('--text-color', colors.textDark);
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if(theme === 'light'){
      appStyle.setProperty('--button-background', colors.buttonLight);
      appStyle.setProperty('--button-hover', colors.buttonHoverLight);
      appStyle.setProperty('--background', colors.backgroundLight);
      appStyle.setProperty('--navbar-background', colors.navbarLight);
      appStyle.setProperty('--navbar-border', colors.navbarBorderLight);
      appStyle.setProperty('--results-background', colors.backgroundLight);
      appStyle.setProperty('--logo-color', colors.logoLight);
      appStyle.setProperty('--text-color', colors.textLight);
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    onInitTheme();
  }, []);

  const buttonStyle = {
    margin: '0.8em 1em'
  };

  return (
    <div className={styles.Navbar}>
      <SearchInput query={props.query} />
      <Button tpye="button" click={onChangeTheme} title="Switch theme" style={buttonStyle}><SunIcon></SunIcon></Button>
    </div>
  );
};

export default Navbar;
