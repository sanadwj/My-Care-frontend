import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, Grid, Button, Loader,
} from 'semantic-ui-react';
import { pharmaciesShow } from '../../thunks/pharmacies/pharmacies';

const Pharmacies = () => {
  const pharmacies = useSelector((state) => state.PharmaciesShowReducer.pharmacies);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pharmaciesShow());
  }, []);

  return (
    <Grid.Row columns={2} className="pharmacies">
      <Card.Group>
        {pharmacies && pharmacies.map((pharmacy) => (
          <Card className="phCard" key={pharmacy.id}>
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
      <div>
        {isFetching === true ? <Loader active inline="centered" /> : ''}
      </div>
      <div className="errors">
        {errors}
      </div>
    </Grid.Row>
  );
};
export default Pharmacies;
