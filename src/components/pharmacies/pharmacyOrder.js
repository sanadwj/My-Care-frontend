/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Modal, Loader, Form, Container,
} from 'semantic-ui-react';
import useForm from '../../util/hooks';
import { pharmacyOrders } from '../../thunks/pharmacies/pharmacies';

const PharmacyOrders = (props) => {
  const orders = useSelector((state) => state.PharmacyOrdersReducer.order);
  console.log(orders);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const { pharmacyId } = props.location.state;
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const { onChange, onSubmit, values } = useForm(phOrders, {
    pharmacy_id: pharmacyId,
    user_id: id,
    name: '',
    dose: '',
    quantity: '',
  });

  function phOrders() {
    dispatch(pharmacyOrders(values));
  }

  if (orders && orders.message === 'Successfully Created') {
    return <Redirect to="/pharmacies" />;
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
      <div>
        {isFetching === true ? <Loader active inline="centered" /> : ''}
        {errors}
      </div>
    </Container>
  );
};

export default PharmacyOrders;
