/* eslint-disable react/no-typos */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Loader, Image, Card,
} from 'semantic-ui-react';
import { fetchNurseShowStartAsync } from '../../actions/nurses/nurseShowActions';
import NurseAppointment from '../../components/nurses/nurseAppointment';

const Nurse = (props) => {
  const nurse = useSelector((state) => state.nurseShow);
  const dispatch = useDispatch();
  const { loggedInStatus } = props;

  const { pathname } = window.location;

  const id = pathname.split('/nurses/show/')[1];

  useEffect(() => {
    dispatch(fetchNurseShowStartAsync(id));
  }, []);

  if (nurse && nurse.nurse) {
    nurse.nurse.map((nur) => (
      localStorage.setItem('nurse', JSON.stringify(nur))
    ));
  }

  const n = JSON.parse(localStorage.getItem('nurse'));
  if (!n) {
    return <Loader />;
  }

  return (
    <div className="doctor" style={{ marginTop: 30 }}>
      {loggedInStatus === true
        ? (
          <div className="doctorDiv">
            <Card>
              <Image src={n.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{n.name}</Card.Header>
                <Card.Meta>
                  <span className="date">{n.specialty}</span>
                </Card.Meta>
                <Card.Description>
                  {n.location}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <span className="date">
                    Rate:
                    {' '}
                    {n.rate}
                    $
                  </span>
                </Card.Meta>
              </Card.Content>
            </Card>
            <div />
            <NurseAppointment nurseId={n.id} />
          </div>
        )
        : <h2>Please Register or Signin to see this page</h2>}
    </div>
  );
};

Nurse.propTypes = {
  loggedInStatus: PropTypes.boolean,
};

Nurse.defaultProps = {
  loggedInStatus: false,
};
export default Nurse;
