/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Container, Loader } from 'semantic-ui-react';
import { fetchAuthStartAsync } from '../../actions/auth/authActions';
import useForm from '../../util/hooks';

const Auth = (props) => {
  const auth = useSelector((state) => state.auth);
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
      props.history.push('/doctors');
    }
  }, [auth]);

  return (
    <Container className="authContainer">
      <Form onSubmit={onSubmit} className="formContainer">
        <Form.Field>
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
    </Container>
  );
};

export default Auth;
