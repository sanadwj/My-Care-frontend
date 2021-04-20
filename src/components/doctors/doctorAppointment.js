/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import {
  Button, Form, Loader,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { doctorAppointment } from '../../thunks/docotrs/doctors';

const DoctorAppointment = (props) => {
  const appointment = useSelector((state) => state.DoctorAppointmentReducer.appointment);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const { doctorId } = props;
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  const { onChange, onSubmit, values } = useForm(docAppointment, {
    doctor_id: doctorId,
    user_id: id,
    username: '',
    note: '',
    at: '',
  });

  function docAppointment() {
    dispatch(doctorAppointment(values));
  }

  if (appointment && appointment.status === 201) {
    return <Redirect to="/doctorappointments" />;
  }

  return (
    <div className="dappointment">
      <h3 className="confirm">Confirm Your Appointment</h3>
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
      <div>
        {isFetching === true ? <Loader active inline="centered" /> : ''}
        {errors}
      </div>
    </div>
  );
};

DoctorAppointment.propTypes = {
  doctorId: PropTypes.number,
};

DoctorAppointment.defaultProps = {
  doctorId: '',
};

export default DoctorAppointment;
