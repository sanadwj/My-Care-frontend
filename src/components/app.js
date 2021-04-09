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
import PharmacyOrders from './pharmacies/pharmacyOrder';
import GetNurseAppointment from './nurseAppointment/getNurseAppointment';
import GetDoctorAppointment from './doctorAppointment/getDoctorAppointment';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';

const App = () => {
  const auth = useSelector((state) => state.auth);

  const {
    state, handleLogin, handleLogout, checkAuthStatus,
  } = authStatus();

  useEffect(() => {
    checkAuthStatus(auth);
  }, [auth]);

  return (
    <Router fluied>
      <NavBar
        loggedInStatus={state.isAuth}
        handleLogout={handleLogout}
      />
      <Switch>

        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Auth {...props} handleLogin={handleLogin} />
          )}
        />
        <Route
          exact
          path="/"
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
        <Route
          exact
          path="/order"
          render={(props) => (
            <PharmacyOrders {...props} loggedInStatus={state.isAuth} />
          )}
        />
        {/* <Route
          exact
          path="/doctorappointments"
          render={(props) => (
            <GetDoctorAppointment {...props} loggedInStatus={state.isAuth} />
          )}
        /> */}
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
