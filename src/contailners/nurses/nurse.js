/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-typos */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Image, Card,
} from 'semantic-ui-react';
import NurseAppointment from '../../components/nurses/nurseAppointment';
import { nurseShow } from '../../thunks/nurses/nurses';

const Nurse = (props) => {
  const nurse = useSelector((state) => state.nurseShowReducer.nurse);
  const dispatch = useDispatch();
  const { loggedInStatus } = props;

  const id = props.location.pathname.split('/nurses/show/')[1];

  useEffect(() => {
    dispatch(nurseShow(id));
  }, []);

  return (
    <div className="doctor" style={{ marginTop: 30 }}>
      {loggedInStatus === true && nurse && nurse.map((n) => (
        <div className="doctorDiv" key={n}>
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
      ))}
    </div>
  );
};

Nurse.propTypes = {
  loggedInStatus: PropTypes.bool,
};

Nurse.defaultProps = {
  loggedInStatus: false,
};
export default Nurse;
