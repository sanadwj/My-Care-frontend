/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import {
  Button, Form, Loader,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { fetchDoctorAppointmentStartAsync } from '../../actions/doctorAppointment/doctorAppointmentActions';

const DoctorAppointment = (props) => {
  const appointment = useSelector((state) => state.doctorAppointment);
  const { doctorId } = props;
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  const { onChange, onSubmit, values } = useForm(docAppointment, {
    doctor_id: doctorId,
    user_id: user.id,
    username: '',
    note: '',
    at: '',
  });

  function docAppointment() {
    dispatch(fetchDoctorAppointmentStartAsync(values));
  }

  if (appointment.isFetching === true) {
    return <Loader active inline="centered" />;
  } if (appointment.docAppointment && appointment.docAppointment.status === 200) {
    return <Redirect to="/doctorappointments" />;
  }

  return (
    <div className="dappointment">
      <h1>Confirm Your Appointment</h1>
      <Form className="dappointmentForm" onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input
              name="username"
              value={values.username}
              onChange={onChange}
              label="Appointment For"
              placeholder="(Optional)"

            />
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <Form.TextArea
            name="note"
            value={values.note}
            onChange={onChange}
            label="Note"
            placeholder="(Optional)"
          />

        </Form.Field>

        <Form.Input
          name="at"
          type="date"
          value={values.at}
          onChange={onChange}
          label="Date"
          required
        />
        <Button
          type="submit"
          content="Confirm"
        />

      </Form>
    </div>
  );
};



export default DoctorAppointment;
