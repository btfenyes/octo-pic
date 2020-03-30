import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './SearchInput.module.css';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import {ReactComponent as SearchIcon} from '../../icons/search.svg';
import Logo from '../../components/Logo/Logo';
import LogoIcon from '../LogoIcon/LogoIcon';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchInput = props => {
  const history = useHistory();
  const queryParam = useQuery().get('q');
  const [query, setQuery] = useState(queryParam ? queryParam : '');

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onButtonClick = e => {
    e.preventDefault();
    history.push('/search?q='+query);    
  };
  const buttonStyle = {
    padding: '0.4em 0.6em',
    margin: '0.2em 0.2em'
  };

  const onLogoClick = () => {
    history.push('/');
  };

  let containerStyle = {};
  if(props.flexFlow === 'column'){
    containerStyle = {
      flexFlow: props.flexFlow,
      justifyContent: 'center'
    };
  }

  let logoTextStyle = {};
  if(props.flexFlow !== 'column'){
    logoTextStyle = {
      display: 'none'
    }
  }

  return (
    <div className={styles.SearchInput} style={containerStyle}>
      <div className={styles.LogoContainer} onClick={onLogoClick}>
        <LogoIcon size="50px"></LogoIcon>
        <Logo style={logoTextStyle} />
      </div>   
      <form>
      <div className={styles.InputContainer}>        
        <Input change={onInputChange} value={query} placeholder="Search" />
        <Button type="submit" style={buttonStyle} click={onButtonClick}><SearchIcon /></Button>
      </div>
      </form> 
    </div>
  );
};

export default SearchInput;
