/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Form, Container, Loader,
} from 'semantic-ui-react';
import { fetchAuthStartAsync } from '../../actions/auth/authActions';
import useForm from '../../util/hooks';

const Auth = (props) => {
  const auth = useSelector((state) => state.auth);
  const reset = useSelector((state) => state.reset);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(authUser, {
    email: '',
    password: '',
  });

  function authUser() {
    dispatch(fetchAuthStartAsync(values));
  }

  useEffect(() => {
    if (auth.auth !== undefined && auth.auth.length !== 0) {
      props.history.push('/home');
    }
  }, [auth]);

  return (
    <Container className="authContainer">
      <Form onSubmit={onSubmit} className="formContainer">
        <Form.Field>
          <label>Email</label>
          <Form.Input
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
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Button type="submit">
          Login
        </Button>
        {auth.isFetching === true ? <Loader active inline="centered" /> : ''}
        {auth && auth.ErrorMessage && auth.ErrorMessage.response && auth.ErrorMessage.response.status === 401 ? 'Please Confirm Your Email' : ''}
        {auth && auth.ErrorMessage && auth.ErrorMessage.response && auth.ErrorMessage.response.status === 500 ? 'Check Your Email and Password' : ''}
      </Form>
      <div>

        {reset.reset && reset.reset.status === 200 ? 'Passaword Successfully Changed' : ''}
      </div>
      <Link
        to="/forgot"
      >
        Forgot Password?
      </Link>
    </Container>
  );
};

export default Auth;
