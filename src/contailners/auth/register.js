/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Form, Loader, Container,
} from 'semantic-ui-react';
import { register } from '../../thunks/auth/auth';
import useForm from '../../util/hooks';

const Registration = (props) => {
  const registration = useSelector((state) => state.registrationReducer.registered);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    city: '',
    password: '',
    password_confirmation: '',
  });

  function registerUser() {
    dispatch(register(values));
  }

  useEffect(() => {
    if (registration === true) {
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
        <div>
          {isFetching === true ? <Loader active inline="centered" /> : ''}
        </div>
        <div className="errors">
          {errors}
        </div>
      </Form>
    </Container>
  );
};

Registration.propTypes = {
  history: PropTypes.string,
};

Registration.defaultProps = {
  history: '',
};

export default Registration;
