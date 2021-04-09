import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Modal, Loader, Form, Container,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { fetchPharmacyOrdersStartAsync } from '../../actions/pharmacies/pharmacyOrdersActions';

const PharmacyOrders = (props) => {
  const orders = useSelector((state) => state.pharmacyOrders);
  const { pharmacyId } = props.location.state;
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const { onChange, onSubmit, values } = useForm(phOrders, {
    pharmacy_id: pharmacyId,
    user_id: user.id,
    name: '',
    dose: '',
    quantity: '',
  });

  function phOrders() {
    dispatch(fetchPharmacyOrdersStartAsync(values));
  }

  if (orders.isFetching === true) {
    return <Loader active inline="centered" />;
  } if (orders.orders && orders.orders.status === 200) {
    console.log(orders.orders.status);
    return <Redirect to="/" />;
  }

  return (
    <Container style={{ marginTop: 30 }}>

      <Form className="dappointmentForm" onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input
              name="name"
              value={values.name}
              onChange={onChange}
              label="Drug Name"
              placeholder="Please Enter Drug Name"
              required
            />
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <Form.Input
            name="dose"
            value={values.dose}
            onChange={onChange}
            label="Dose"
            placeholder="Please Enter The Dose"
            required
          />

        </Form.Field>

        <Form.Input
          name="quantity"
          value={values.quantity}
          onChange={onChange}
          label="Quantity"
          placeholder="Please Enter The Quantity"
          required
        />

        <Form.Field>
          <Form.TextArea
            name="note"
            value={values.note}
            onChange={onChange}
            label="Note"
            placeholder="(Optional)"
          />

        </Form.Field>

        <Modal.Actions>
          <Button
            type="submit"
            content="Confirm"
          />
        </Modal.Actions>
      </Form>
    </Container>
  );
};

export default PharmacyOrders;
