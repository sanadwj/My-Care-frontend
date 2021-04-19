/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, Card } from 'semantic-ui-react';
import DoctorAppointment from '../../components/doctors/doctorAppointment';
import { doctorShow } from '../../thunks/docotrs/doctors';

const Doctor = (props) => {
  const doctor = useSelector((state) => state.doctorShowReducer.doctor);
  const dispatch = useDispatch();
  const { loggedInStatus } = props;
  console.log(props);

  const id = props.location.pathname.split('/doctors/show/')[1];

  useEffect(() => {
    dispatch(doctorShow(id));
  }, []);

  return (
    <div className="doctor" style={{ marginTop: 30 }}>
      {loggedInStatus === true && doctor && doctor.map((d) => (
        <div className="doctorDiv" key={d}>
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
          <DoctorAppointment doctorId={doctor[0].id} userId={doctor[1]} />
        </div>
      ))}
    </div>
  );
};

// Doctor.propTypes = {
//   loggedInStatus: PropTypes.func,
// };

// Doctor.defaultProps = {
//   loggedInStatus: null,
// };
export default Doctor;
