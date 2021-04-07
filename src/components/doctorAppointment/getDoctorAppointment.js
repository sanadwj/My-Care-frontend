import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Header, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { fetchGetDoctorAppointmentStartAsync } from '../../actions/doctorAppointment/getDoctorAppointmentActions';

const GetDoctorAppointment = () => {
  const doctorAppointment = useSelector((state) => state.getDoctorAppointment);
  const dispatch = useDispatch();
  console.log(doctorAppointment.appointment);

  useEffect(() => {
    dispatch(fetchGetDoctorAppointmentStartAsync());
  }, []);

  return (
    <Segment>

      <Header>
        Doctor Appointments
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

        {doctorAppointment.appointment
          && doctorAppointment.appointment.appointment
          && doctorAppointment.appointment.appointment.map((appointment) => (
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

export default GetDoctorAppointment;
