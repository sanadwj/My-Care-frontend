/* eslint-disable react/no-typos */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Loader, Image, Card,
} from 'semantic-ui-react';
import { fetchDoctorShowStartAsync } from '../../actions/doctors/doctorShowActions';
import DoctorAppointment from '../../components/doctorAppointment/doctorAppointment';

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
    <div className="doctor" style={{ marginTop: 30 }}>
      {loggedInStatus === true
        ? (
          <div className="doctorDiv">
            <Card>
              <Image src={d.image} wrapped ui={false} />
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
        )
        : <h2>Please Register or Signin to see this page</h2>}
    </div>
  );
};

Doctor.propTypes = {
  loggedInStatus: PropTypes.boolean,
};

Doctor.defaultProps = {
  loggedInStatus: false,
};
export default Doctor;
