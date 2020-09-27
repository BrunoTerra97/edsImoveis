import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Redirect to="/home" />
      </Route>
      <Route exact path='/home' component={Home} />
      <Route exact path='/cadastro' component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
