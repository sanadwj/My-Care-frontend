/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Loader, Image, Segment, Container, Card, Input, TextArea,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { fetchDoctorAppointmentStartAsync } from '../../actions/appointment/doctorAppointmentActions';

const DoctorAppointment = (props) => {
  const { doctor, userId, doctorId } = props;
  const dispatch = useDispatch();
  console.log(doctor);

  const { onChange, onSubmit, values } = useForm(docAppointment, {
    doctor_id: doctorId,
    user_id: userId,
    username: '',
    note: '',
    at: '',
  });

  function docAppointment() {
    dispatch(fetchDoctorAppointmentStartAsync(values));
  }
  return (
    <div className="dappointment">
      <h1>Confirm Your Appointment</h1>
      {
        doctor.doctor && doctor.doctor[1] ? doctor.doctor[1].map((opt) => (
          <Form key={opt.id} className="dappointmentForm" onSubmit={onSubmit}>
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
            />
            <Button
              type="submit"
              content="Confirm"
            />
          </Form>

        )) : <Loader active inline="centered" />
      }
    </div>
  );
};

export default DoctorAppointment;
