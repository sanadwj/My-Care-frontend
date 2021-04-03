/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import {
  Button, Form, Loader,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { fetchNurseAppointmentStartAsync } from '../../actions/appointment/nurseAppointmentActions';

const NurseAppointment = (props) => {
  const appointment = useSelector((state) => state.nurseAppointment);
  const { nurseId } = props;
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  const { onChange, onSubmit, values } = useForm(nurAppointment, {
    nurse_id: nurseId,
    user_id: user.id,
    username: '',
    note: '',
    at: '',
  });

  function nurAppointment() {
    dispatch(fetchNurseAppointmentStartAsync(values));
  }

  if (appointment.isFetching === true) {
    return <Loader active inline="centered" />;
  } if (appointment.appointment && appointment.appointment.status === 200) {
    return <Redirect to="/" />;
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

export default NurseAppointment;
