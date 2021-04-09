/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Loader, Container,
} from 'semantic-ui-react';
import { fetchForgotPasswordsStartAsync } from '../actions/passwords/forgotPassword';
import useForm from '../util/hooks';

const ForgotPassword = () => {
  const forgot = useSelector((state) => state.forgot);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(forgotPassword, {
    email: '',
  });

  function forgotPassword() {
    dispatch(fetchForgotPasswordsStartAsync(values));
  }

  if (forgot.status && forgot.status.status === 200) {
    return <Redirect to="/reset" />;
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={onChange}
            value={values.email}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
      <div>
        {forgot.isFetching === true ? <Loader active inline="centered" /> : ''}
      </div>

    </Container>

  );
};

export default ForgotPassword;
