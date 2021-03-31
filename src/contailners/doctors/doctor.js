import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loader, Image, Card,
} from 'semantic-ui-react';
import { fetchDoctorShowStartAsync } from '../../actions/doctors/doctoShowActions';
import DoctorAppointment from '../../components/appointment/doctorAppointment';

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

  return (
    <div className="doctor">
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
                <span className="date">
                  Rate:
                  {' '}
                  {doc.rate}
                  $
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
        )) : <Loader active inline="centered" />}
      </div>

      <DoctorAppointment doctor={doctor} />
    </div>
  );
};
export default Doctor;
