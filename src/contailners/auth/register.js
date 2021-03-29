/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Loader, Grid, Segment, Container, Label } from 'semantic-ui-react';
import { fetchRegistrationStartAsync } from '../../actions/registrationActions';
import useForm from '../../util/hooks';

const Registration = (props) => {
  const registration = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    email: '',
    password: '',
    password_confirmation: '',
  });

  function registerUser() {
    dispatch(fetchRegistrationStartAsync(values));
  }

  useEffect(() => {
    if (registration.registration !== undefined && registration.registration.length !== 0) {
      props.history.push('/confirm');
    }
  }, [registration]);

  return (
    <Container style={{ margin: 20 }} >
      <Form onSubmit={onSubmit} className="formContainer">
        <Form.Field>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Form.Field>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Form.Field>

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={values.password_confirmation}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Button type="submit">
          Register
        </Button>
        {registration.isFetching === true ? <Loader active inline="centered" /> : ''}
        {registration.errorMessage && registration.errorMessage.response.status === 500 ? 'Email Already Exsit' : ''}
      </Form>
    </Container>
  );
};

export default Registration;
