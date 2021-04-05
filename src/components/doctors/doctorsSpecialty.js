import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Loader, Header } from 'semantic-ui-react';
import { fetchDoctorSpecialtyStartAsync } from '../../actions/doctors/doctorSpecialtyActions';

const DoctorsSpecialtyList = (props) => {
  const { spec } = props;
  const doctorSpecialty = useSelector((state) => state.doctorSpecialty);
  const dispatch = useDispatch();
  console.log(spec);
  console.log(doctorSpecialty);

  useEffect(() => {
    dispatch(fetchDoctorSpecialtyStartAsync(spec));
  }, [spec]);

  return (
    <div>
      <Header style={{ margin: 30 }}>
        {doctorSpecialty.ErrorMessage && doctorSpecialty.ErrorMessage.response.status === 401 ? <h2>Please Register or Signin to see this page</h2> : ''}
      </Header>
      {doctorSpecialty.isFetching === true ? (
        <Loader active inline="centered" />
      )
        : doctorSpecialty.doctors !== undefined && doctorSpecialty.doctors.map((doctor) => (
          <Item.Group
            className="filter"
            key={doctor.id}
            as={Link}
            to={{
              pathname: `/doctors/show/${doctor.id}`,
              id: doctor.id,
            }}
          >
            <Item>
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

          </Item.Group>
        ))}
    </div>
  );
};

export default DoctorsSpecialtyList;
