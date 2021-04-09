/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Loader, Container,
} from 'semantic-ui-react';
import { fetchRegistrationStartAsync } from '../../actions/auth/registrationActions';
import useForm from '../../util/hooks';

const Registration = (props) => {
  const registration = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    city: '',
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
    <Container style={{ margin: 20 }}>
      <Form onSubmit={onSubmit} className="formContainer">
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={onChange}
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
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
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
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
          <label>Confirm Password</label>

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
        {registration.ErrorMessage && registration.ErrorMessage.response.status === 500 ? 'Email Already Exsit' : ''}
      </Form>
    </Container>
  );
};

export default Registration;
