import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Header, Segment, Loader,
} from 'semantic-ui-react';
import moment from 'moment';
import { getDoctorsAppointment } from '../../thunks/docotrs/doctors';

const GetDoctorAppointment = () => {
  const appointments = useSelector((state) => state.GetDoctorAppointmentReducer.appointments);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAppointment());
  }, []);

  return (
    <div className="getApp">
      {
        isFetching === true ? (
          <Loader active inline="centered" />
        )
          : (
            <Segment>
              <Header>
                Doctor Appointments
              </Header>
              <Card.Group>
                {appointments && appointments.map((appointment) => (
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
                {errors}
              </div>

            </Segment>
          )
      }
    </div>
  );
};

export default GetDoctorAppointment;
