/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Loader } from 'semantic-ui-react';
import { fetchRegistrationStartAsync } from '../../actions/registrationActions';
import useForm from '../../util/hooks';

const Registration = (props) => {
  const registration = useSelector((state) => state.registration);
  const dispatch = useDispatch();
  console.log(registration.isFetching);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    email: '',
    password: '',
    confirmPassword: '',
  });

  // eslint-disable-next-line consistent-return
  function registerUser() {
    dispatch(fetchRegistrationStartAsync(values));
    props.history.push('/');
  }

  return (
    <div style={{ marginTop: 20 }} className="formContainer">
      <Form onSubmit={onSubmit}>
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
          <label>Password Confirmation</label>
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
      </Form>
    </div>
  );
};

export default Registration;
