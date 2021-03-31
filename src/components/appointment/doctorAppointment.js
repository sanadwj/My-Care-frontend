/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Form, Loader, Image, Segment, Container, Card, Input, TextArea,
} from 'semantic-ui-react';


const DoctorAppointment = (props) => {
  const { doctor } = props;
  console.log(doctor);
  return (
    <div className="dappointment">
      <h1>Confirm Your Appointment</h1>
      {
        doctor.doctor && doctor.doctor[1] ? doctor.doctor[1].map((opt) => (
          <Form key={opt.id} className="dappointmentForm">
            <Form.Group widths="equal">
              <Form.Field
                value={opt.username}
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
              />

            </Form.Group>

            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="joe@schmoe.com"
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Note"
              placeholder="Note"
            />
            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Confirm"
            />
          </Form>

        )) : <Loader active inline="centered" />
      }
    </div>
  );
};

export default DoctorAppointment;