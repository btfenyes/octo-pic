import React from 'react';
import styles from './App.module.css';
import ResultsContainer from './containers/ResultsContainer/ResultsContainer';
import StartPageContainer from './containers/StartPageContainer/StartPageContainer';
import { Switch, Route } from 'react-router-dom';

function App() { 

  return (
    <div className={styles.App} id={styles.App}>
      <Switch>
        <Route exact path="/">
          <StartPageContainer />
        </Route>
        <Route path="/search">
          <ResultsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
