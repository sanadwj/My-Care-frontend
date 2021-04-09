import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Header, Segment, Loader } from 'semantic-ui-react';
import moment from 'moment';
import { fetchGetNurseAppointmentStartAsync } from '../../actions/nurseAppointment/getNurseAppointmentActions';

const GetNurseAppointment = () => {
  const nurseAppointment = useSelector((state) => state.getNurseAppointment);
  const dispatch = useDispatch();
  console.log(nurseAppointment.getNurAppointment);

  useEffect(() => {
    dispatch(fetchGetNurseAppointmentStartAsync());
  }, []);

  return (
    <div>
      <Header style={{ margin: 30 }}>
        {nurseAppointment.ErrorMessage && nurseAppointment.ErrorMessage.response.status === 401 ? <h2>Please Register or Signin to see this page</h2> : ''}
      </Header>
      {
        nurseAppointment.isFetching === true ? (
          <Loader active inline="centered" />
        )
          : (
            <Segment>

              <Header>
                Nurse Appointments
              </Header>
              <Card.Group>
                {nurseAppointment.getNurAppointment
                  && nurseAppointment.getNurAppointment.appointment
                  && nurseAppointment.getNurAppointment.appointment.map((appointment) => (
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
                {nurseAppointment.getNurAppointment
                  && nurseAppointment.getNurAppointment.appointment
                  && nurseAppointment.getNurAppointment.appointment.length === 0 ? 'Sorry there is no Appointments' : ''}
              </div>
            </Segment>
          )
      }
    </div>
  );
};

export default GetNurseAppointment;
