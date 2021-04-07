import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import { Menu } from 'semantic-ui-react';
import AppointmentsNavBar from '../../components/appointmentNavBar';
import GetDoctorAppointment from '../../components/doctorAppointment/getDoctorAppointment';
import GetNurseAppointment from '../../components/nurseAppointment/getNurseAppointment';

const AppointmentsAndOrders = () => (
  <Router fluied>
    <AppointmentsNavBar />
    <Switch>
      <Route to="/nurseappointments" component={GetNurseAppointment} />
      <Route to="/doctorappointments" component={GetDoctorAppointment} />
    </Switch>
  </Router>
);

export default AppointmentsAndOrders;
