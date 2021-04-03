/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Loader, Image, Card,
} from 'semantic-ui-react';
import { fetchDoctorShowStartAsync } from '../../actions/doctors/doctorShowActions';
import DoctorAppointment from '../../components/appointment/doctorAppointment';

const Doctor = (props) => {
  const doctor = useSelector((state) => state.doctorShow);
  const dispatch = useDispatch();
  const { loggedInStatus } = props;

  const { pathname } = window.location;

  const id = pathname.split('/doctors/show/')[1];

  useEffect(() => {
    dispatch(fetchDoctorShowStartAsync(id));
  }, []);

  if (doctor && doctor.doctor) {
    doctor.doctor.map((doc) => (
      localStorage.setItem('doctor', JSON.stringify(doc))
    ));
  }

  const d = JSON.parse(localStorage.getItem('doctor'));
  if (!d) {
    return <Loader />;
  }

  return (
    <div>
      {loggedInStatus === true
        ? (
          <div>

            <div className="doctor">
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{d.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">{d.specialty}</span>
                  </Card.Meta>
                  <Card.Description>
                    {d.location}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <span className="date">
                      Rate:
                      {' '}
                      {d.rate}
                      $
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <div />
              <DoctorAppointment doctorId={d.id} />
            </div>
          </div>
        )
        : <h2>Please Register or Signin to see this page</h2>}
    </div>
  );
};
export default Doctor;
