/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, Grid, Loader, Button,
} from 'semantic-ui-react';
import { fetchPharmaciesShowStartAsync } from '../../actions/pharmacies/pharmaciesShowActions';
// import PharmacyOrders from '../../components/pharmacies/pharmacyOrder';

const Pharmacies = () => {
  const pharmacies = useSelector((state) => state.pharmaciesShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPharmaciesShowStartAsync());
  }, []);

  return (
    <Grid columns={2}>
      <Grid.Row className="cardrow">
        <Card.Group>
          {pharmacies && pharmacies.pharmacies && pharmacies.pharmacies.map((pharmacy) => (
            <Card className="phCard">
              <Card.Content>
                <Card.Header>{pharmacy.name}</Card.Header>
                <Card.Description>
                  <strong>{pharmacy.location}</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>
                  <Link to={{
                    pathname: '/order',
                    state: {
                      pharmacyId: pharmacy.id,
                    },
                  }}
                  >
                    Order
                    </Link>
                </Button>
              </Card.Content>
            </Card>

          ))}
        </Card.Group>
      </Grid.Row>

    </Grid>
  );
};
export default Pharmacies;
