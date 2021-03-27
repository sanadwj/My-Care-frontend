import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../contailners/auth/register';
import NavBar from './navbar';
import Confirm from '../contailners/auth/confirmEmail';

const App = () => (
  <Router fluied>
    <NavBar />

    <Route exact path="/regitration" component={Registration} />
    <Route exact path="/confirm" component={Confirm} />

  </Router>
);

export default App;
