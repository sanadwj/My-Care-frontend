import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Segment, Item, Image, Loader, Header, Icon,
} from 'semantic-ui-react';
import { fetchDoctorSpecialtyStartAsync } from '../../actions/doctorSpecialtyActions';

const DoctorsSpecialtyList = (props) => {
  const { spec } = props;
  const doctorSpecialty = useSelector((state) => state.doctorSpecialty);
  const dispatch = useDispatch();
  console.log(doctorSpecialty);

  useEffect(() => {
    dispatch(fetchDoctorSpecialtyStartAsync(spec));
  }, [spec]);

  return (
    <div>
      {doctorSpecialty.isFetching === true ? (
        <Loader active inline="centered" />
      )
        : doctorSpecialty.doctors.map((doctor) => (
          <Segment className="filter" key={doctor.id}>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />

                <Item.Content>
                  <Item.Header as="a">{doctor.name}</Item.Header>
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

            </Item.Group>
          </Segment>
        ))}
    </div>
  );
};

export default DoctorsSpecialtyList;
