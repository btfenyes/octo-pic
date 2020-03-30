import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';

const StartPageContainer = () => {
  const style = {
    height: '100%'
  };
  return (
    <div style={style}>
      <SearchInput flexFlow="column" />
    </div>
  );
};

export default StartPageContainer;
