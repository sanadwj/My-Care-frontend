import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Header, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { fetchGetNurseAppointmentStartAsync } from '../../actions/nurseAppointment/getNurseAppointmentActions';

const GetNurseAppointment = () => {
  const nurseAppointment = useSelector((state) => state.getNurseAppointment);
  const dispatch = useDispatch();
  console.log(nurseAppointment.appointment);

  useEffect(() => {
    dispatch(fetchGetNurseAppointmentStartAsync());
  }, []);

  return (
    <Segment>

      <Header>
        Nurse Appointments
      </Header>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Appointment For</Table.HeaderCell>
            <Table.HeaderCell>Note</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {nurseAppointment.appointment
          && nurseAppointment.appointment.appointment
          && nurseAppointment.appointment.appointment.map((appointment) => (
            <Table.Body key={appointment.id}>
              <Table.Row>
                <Table.Cell>{appointment.name}</Table.Cell>
                <Table.Cell>{moment(appointment.at).format('MMM Do YY')}</Table.Cell>
                <Table.Cell>{appointment.location}</Table.Cell>
                <Table.Cell>{appointment.username}</Table.Cell>
                <Table.Cell>{appointment.note}</Table.Cell>
              </Table.Row>

            </Table.Body>

          ))}
      </Table>
    </Segment>
  );
};

export default GetNurseAppointment;
