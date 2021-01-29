/* eslint-disable no-unused-vars */
import React from 'react';
import Game from '../../pages/gamePage';
import BirdCatalog from '../../pages/birdsCatalog';
import HomePage from '../../pages/homePage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/birdCatalog" component={BirdCatalog} />
      <Route path="/game" component={Game} />
    </Switch>
  );
};
export default App;
