import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Loader, Header } from 'semantic-ui-react';
import { fetchNurseSpecialtyStartAsync } from '../../actions/nurses/nurseSpecialtyActions';

const NursesSpecialtyList = (props) => {
  const { spec } = props;
  const nurseSpecialty = useSelector((state) => state.nurseSpecialty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNurseSpecialtyStartAsync(spec));
  }, [spec]);

  return (
    <div>
      <Header style={{ margin: 30 }}>
        {nurseSpecialty.ErrorMessage && nurseSpecialty.ErrorMessage.response.status === 401 ? <h2>Please Register or Signin to see this page</h2> : ''}
      </Header>
      {nurseSpecialty.isFetching === true ? (
        <Loader active inline="centered" />
      )
        : nurseSpecialty.nurses !== undefined && nurseSpecialty.nurses.map((nurse) => (
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
