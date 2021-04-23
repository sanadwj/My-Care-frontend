/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
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
import PharmacyOrders from './pharmacies/pharmacyOrder';
import GetNurseAppointment from './nurses/getNurseAppointment';
import GetDoctorAppointment from './doctors/getDoctorAppointment';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';

const App = () => {
  const auth = useSelector((state) => state.authReducer);

  const {
    state, checkAuthStatus, handleLogout,
  } = authStatus();

  useEffect(() => {
    checkAuthStatus(auth);
  }, [auth]);

  return (
    <Router fluied>
      <NavBar loggedInStatus={state.isAuth} handleLogout={handleLogout} />
      <Switch>

        <Route
          exact
          path="/home"
          render={(props) => (
            <Home {...props} loggedInStatus={state.isAuth} />
          )}
        />

        <Route
          exact
          path="/"
          render={(props) => (state.isAuth === false ? (
            <Auth {...props} loggedInStatus={state.isAuth} />
          ) : <Redirect to="/home" />)}
        />
        <Route
          exact
          path="/register"
          render={(props) => (
            <Registration {...props} />
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
        <Route
          exact
          path="/order"
          render={(props) => (
            <PharmacyOrders {...props} loggedInStatus={state.isAuth} />
          )}
        />
        <Route exact path="/nurseappointments" component={GetNurseAppointment} />
        <Route exact path="/doctorappointments" component={GetDoctorAppointment} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/nurses" component={Nurses} />
        <Route exact path="/pharmacies" component={Pharmacies} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/reset" component={ResetPassword} />
      </Switch>

    </Router>
  );
};

export default App;
