/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../contailners/auth/register';
import NavBar from './navbar';
import Confirm from '../contailners/auth/confirmEmail';
import Auth from '../contailners/auth/auth';
import Home from '../contailners/home';

const App = () => {
  const auth = useSelector((state) => state.auth);

  const [state, setState] = useState({
    isAuth: false,
  });
  console.log(state);

  const handleLogin = () => {
    setState({
      isAuth: true,
    });
  };

  const handleLogout = () => {
    setState({
      isAuth: false,
    });
  };

  const checkAuthStatus = () => {
    if (auth && auth.auth !== undefined && auth.auth.length !== 0) {
      setState({
        isAuth: true,
      });
    } else if (!auth && auth.auth === undefined && auth.auth.length === 0
      && state.isAuth === true) {
      setState({
        isAuth: false,
      });
    } else if (auth.errorMessage
      && !auth.errorMessage.response.status === 500 && state.isAuth === false) {
      setState({
        isAuth: false,
      });
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, [auth]);

  return (
    <Router fluied>
      <NavBar
        loggedInStatus={state.isAuth}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Auth {...props} handleLogin={handleLogin} />
          )}
        />
        <Route
          exact
          path="/regitration"
          render={(props) => (
            <Registration {...props} handleLogin={handleLogin} />
          )}

        />

        <Route exact path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  );
};

export default App;
