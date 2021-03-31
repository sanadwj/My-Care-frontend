import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Loader, Image, Segment, Container, Card, Input, TextArea,
} from 'semantic-ui-react';
import { fetchDoctorShowStartAsync } from '../../actions/doctors/doctoShowActions';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorShow);
  const dispatch = useDispatch();
  console.log(doctor.doctor);

  const { pathname } = window.location;

  const id = pathname.split('/doctors/show/')[1];
  console.log(id);

  useEffect(() => {
    dispatch(fetchDoctorShowStartAsync(id));
  }, [id]);

  // const doc = Object.values(doctor.doctor);

  // const strIngredient = [];
  // Object.keys(keys).forEach(i => {
  //   if (i.includes('strIngredient')) {
  //     strIngredient.push(keys[i]);
  //   }
  // });

  return (
    <div>
      <div>
        {doctor.doctor[0] ? doctor.doctor[0].map((doc) => (
          <Card key={doc.id}>
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{doc.name}</Card.Header>
              <Card.Meta>
                <span className="date">{doc.specialty}</span>
              </Card.Meta>
              <Card.Description>
                {doc.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Meta>
                <span className="date">{doc.rate}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        )) : ' '}
      </div>
    </div>
  );
};
export default Doctor;
