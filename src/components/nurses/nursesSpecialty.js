import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Loader, Header } from 'semantic-ui-react';
import { fetchNurseSpecialtyStartAsync } from '../../actions/nurses/nurseSpecialtyActions';

const NursesSpecialtyList = (props) => {
  const { spec } = props;
  const nurseSpecialty = useSelector((state) => state.nurseSpecialty);
  const dispatch = useDispatch();
  console.log(spec);
  console.log(nurseSpecialty);

  useEffect(() => {
    dispatch(fetchNurseSpecialtyStartAsync(spec));
  }, [spec]);

  return (
    <div>
      <Header style={{ margin: 30 }}>
        {nurseSpecialty.NSpecialtyErrorMessage && nurseSpecialty.NSpecialtyErrorMessage.response.status === 401 ? <h2>Please Register or Signin to see this page</h2> : ''}
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
            <Item>
              <Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />

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

export default NursesSpecialtyList;
