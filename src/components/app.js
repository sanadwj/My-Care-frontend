/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import authStatus from '../context/authStatus';
import Registration from '../contailners/auth/register';
import NavBar from './navbar';
import Confirm from '../pages/confirmEmail';
import Auth from '../contailners/auth/auth';
import Home from '../contailners/home';
import Doctors from '../contailners/doctors/doctors';
import Doctor from '../contailners/doctors/doctor';
import Nurses from '../contailners/nurses/nurses';
import Nurse from '../contailners/nurses/nurse';
import Pharmacies from '../contailners/pharmacies/pharmacies';



const App = () => {
  const auth = useSelector((state) => state.auth);

  const {
    state, handleLogin, handleLogout, checkAuthStatus,
  } = authStatus();
  console.log(state);
  useEffect(() => {
    checkAuthStatus(auth);
  }, [auth]);
  console.log(state.isAuth);
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
        <Route
          exact
          path="/doctors/show/:id"
          render={(props) => (
            <Doctor {...props} loggedInStatus={state.isAuth} />
          )}
        />
        <Route
          exact
          path="/nurses/show/:id"
          render={(props) => (
            <Nurse {...props} loggedInStatus={state.isAuth} />
          )}
        />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/nurses" component={Nurses} />
        <Route exact path="/pharmacies" component={Pharmacies} />
        <Route exact path="/confirm" component={Confirm} />
      </Switch>

    </Router>
  );
};

export default App;
