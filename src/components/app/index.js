/* eslint-disable no-unused-vars */
import React from 'react';
import Game from '../../pages/gamePage';
import BirdCatalog from '../../pages/birdsCatalog';
import HomePage from '../../pages/homePage';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/birdCatalog/:name?" component={BirdCatalog} />
      <Route path="/game" component={Game} />
      <Redirect to={'/'} />
    </Switch>
  );
};
export default App;
