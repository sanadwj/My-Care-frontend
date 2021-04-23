import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Loader } from 'semantic-ui-react';
import { nursesSpecialty } from '../../thunks/nurses/nurses';

const NursesSpecialtyList = (props) => {
  const { spec } = props;
  const nurseSpecialty = useSelector((state) => state.NurseSpecialtyReducer.specialty);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const dispatch = useDispatch();
  useEffect(() => {
    if (spec) {
      dispatch(nursesSpecialty(spec));
    }
  }, [spec]);

  return (
    <div>
      {nurseSpecialty && nurseSpecialty.map((nurse) => (
        <Item.Group
          className="filter"
          key={nurse.id}
          as={Link}
          to={{
            pathname: `/nurses/show/${nurse.id}`,
            id: nurse.id,
          }}
        >
          <Item className="docDiv">
            <Item.Image size="tiny" src={nurse.image} />
            <Item.Content>
              <Item.Header>{nurse.name}</Item.Header>
              <Item.Meta>{nurse.specialty}</Item.Meta>
              <Item.Description>
                {nurse.location}
              </Item.Description>
              <Item.Extra>
                Rate:
                {' '}
                {nurse.rate}
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

NursesSpecialtyList.propTypes = {
  spec: PropTypes.string,
};

NursesSpecialtyList.defaultProps = {
  spec: '',
};

export default NursesSpecialtyList;
