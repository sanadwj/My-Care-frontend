import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../contailners/auth/register';
import NavBar from './navbar';

const App = () => (
  <Router>
    <NavBar />

    <Route exact path="/regitration" component={Registration} />

  </Router>
);

export default App;
