import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Loader, Image, Segment, Container, Card, Input, TextArea,
} from 'semantic-ui-react';
import { fetchDoctorShowStartAsync } from '../../actions/doctors/doctoShowActions';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorShow);
  const dispatch = useDispatch();
  console.log(doctor);

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
        {doctor.doctor && doctor.doctor[0] ? doctor.doctor[0].map((doc) => (
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

      {doctor.doctor && doctor.doctor[1] ? doctor.doctor[1].map((opt) => (
        <Form key={opt.id} style={{ width: 700 }}>
          <Form.Group widths="equal">
            <Form.Field
              value={opt.username}
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
            />

          </Form.Group>

          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
          />

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
          />
        </Form>

      )) : ''}
    </div>
  );
};
export default Doctor;
