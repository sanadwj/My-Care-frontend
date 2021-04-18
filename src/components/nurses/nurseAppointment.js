/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import {
  Button, Form, Loader,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { fetchNurseAppointmentStartAsync } from '../../actions/nurses/nurseAppointmentActions';

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

  if (appointment.nurAppointment && appointment.nurAppointment.status === 200) {
    return <Redirect to="/nurseappointments" />;
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
        {appointment.isFetching === true ? <Loader active inline="centered" /> : ''}
      </div>
    </div>
  );
};

NurseAppointment.propTypes = {
  nurseId: PropTypes.string,
};

NurseAppointment.defaultProps = {
  nurseId: '',
};

export default NurseAppointment;
