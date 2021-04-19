import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Loader } from 'semantic-ui-react';
import { doctorsSpecialty, doctorShow } from '../../thunks/docotrs/doctors';


const DoctorsSpecialtyList = (props) => {
  const { spec } = props;
  const doctorSpecialty = useSelector((state) => state.doctorSpecialtyReducer.doctors);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doctorsSpecialty(spec));
  }, [spec]);

  const handelClick = (id) => {
    dispatch(doctorShow(id));
  };

  return (
    <div>
      { doctorSpecialty && doctorSpecialty.map((doctor) => (
        <Item.Group
          className="filter"
          key={doctor.id}
          onClick={() => handelClick(doctor.id)}
          as={Link}
          to={{
            pathname: `/doctors/show/${doctor.id}`,
            id: doctor.id,
          }}
        >
          <Item className="docDiv">
            <Item.Image size="tiny" src={doctor.image} />

            <Item.Content>
              <Item.Header>{doctor.name}</Item.Header>
              <Item.Meta>{doctor.specialty}</Item.Meta>
              <Item.Description>
                {doctor.location}
              </Item.Description>
              <Item.Extra>
                Rate:
                {' '}
                {doctor.rate}
                {' '}
                $
              </Item.Extra>
            </Item.Content>
          </Item>
          <div>
            {isFetching === true ? <Loader active inline="centered" /> : ''}
          </div>
        </Item.Group>
      ))}
    </div>
  );
};

DoctorsSpecialtyList.propTypes = {
  spec: PropTypes.string,
};

DoctorsSpecialtyList.defaultProps = {
  spec: '',
};

export default DoctorsSpecialtyList;
