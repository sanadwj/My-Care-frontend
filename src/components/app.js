import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../contailners/auth/register';
import NavBar from './navbar';
import Confirm from '../contailners/auth/confirmEmail';

const App = () => (
  <Router fluied>
    <NavBar />
    <Switch>
      <Route
        exact
        path="/regitration"
        render={(props) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Registration {...props} />
        )}

      />

      <Route exact path="/confirm" component={Confirm} />
    </Switch>
  </Router>
);

export default App;
