import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Header, Segment, Loader,
} from 'semantic-ui-react';
import moment from 'moment';
import { fetchGetDoctorAppointmentStartAsync } from '../../actions/doctors/getDoctorAppointmentActions';

const GetDoctorAppointment = () => {
  const doctorAppointment = useSelector((state) => state.getDoctorAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetDoctorAppointmentStartAsync());
  }, []);

  return (
    <div className="getApp">
      <Header style={{ margin: 30 }}>
        {doctorAppointment.ErrorMessage && doctorAppointment.ErrorMessage.response.status === 401 ? <h2>Please Register or Signin to see this page</h2> : ''}
      </Header>
      {
        doctorAppointment.isFetching === true ? (
          <Loader active inline="centered" />
        )
          : (
            <Segment>

              <Header>
                Doctor Appointments
              </Header>

              <Card.Group>
                {doctorAppointment.getDocAppointment
                  && doctorAppointment.getDocAppointment.appointment
                  && doctorAppointment.getDocAppointment.appointment.map((appointment) => (
                    <Card key={appointment.id}>
                      <Card.Content>
                        <Card.Header>{appointment.name}</Card.Header>
                        <br />
                        <Card.Meta>
                          At:
                          {' '}
                          {moment(appointment.at).format('MMM Do YY')}
                        </Card.Meta>
                        <br />
                        <Card.Meta>
                          Appointment For:
                          {' '}
                          {appointment.username}
                        </Card.Meta>
                        <br />
                        <Card.Meta>
                          Made By:
                          {' '}
                          {appointment.signed_in_user}
                        </Card.Meta>
                        <br />
                        <Card.Description>
                          Location:
                          {' '}
                          {appointment.location}
                        </Card.Description>
                        <br />
                        <Card.Description>
                          Note:
                          {' '}
                          {appointment.note}
                        </Card.Description>
                      </Card.Content>
                    </Card>

                  ))}
              </Card.Group>
              <div style={{ marginTop: 30 }}>
                {doctorAppointment.getDocAppointment
                  && doctorAppointment.getDocAppointment.appointment
                  && doctorAppointment.getDocAppointment.appointment.length === 0 ? 'Sorry there is no Appointments' : ''}
              </div>
            </Segment>
          )
      }
    </div>
  );
};

export default GetDoctorAppointment;
