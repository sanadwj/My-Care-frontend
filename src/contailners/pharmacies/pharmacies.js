/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loader, Image, Card, Button, Grid,
} from 'semantic-ui-react';
import { fetchPharmaciesShowStartAsync } from '../../actions/pharmacies/pharmaciesShowActions';

const Nurse = (props) => {
  const pharmacies = useSelector((state) => state.pharmaciesShow);
  const dispatch = useDispatch();
  console.log(pharmacies);
  useEffect(() => {
    dispatch(fetchPharmaciesShowStartAsync());
  }, []);

  return (
    <Grid columns={2} fluid>
      <Grid.Row>
        {pharmacies && pharmacies.pharmacies && pharmacies.pharmacies.map((pharmacy) => (
          <Grid.Column key={pharmacy.id} className="pharmacies" textAlign='center'>
            <Card className="phCard">
              <Card.Content>
                <Card.Header>{pharmacy.name}</Card.Header>
                <Card.Description>
                  <strong>{pharmacy.location}</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Ordar Drugs
                      </Button>
                </div>
              </Card.Content>
            </Card>



          </Grid.Column>

        ))}
      </Grid.Row>


    </Grid>
  );
};
export default Nurse;
