/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Form, Container, Loader,
} from 'semantic-ui-react';
import { logIn } from '../../thunks/auth/auth';
import useForm from '../../util/hooks';

const Auth = (props) => {
  const auth = useSelector((state) => state.authReducer.authenticated);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const reset = useSelector((state) => state.ResetPasswordReducer.reset);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(authUser, {
    email: '',
    password: '',
  });

  function authUser() {
    dispatch(logIn(values));
  }

  useEffect(() => {
    if (auth === true) {
      props.history.push('/home');
    }
  }, [auth]);

  return (
    <Container style={{ margin: 20 }}>
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
        {isFetching === true ? <Loader active inline="centered" /> : ''}
        <div className="errors">
          {errors}
        </div>
      </Form>
      <div>
        {reset && reset.status === 200 ? 'Passaword Successfully Changed' : ''}
      </div>
      <Link
        to="/forgot"
      >
        Forgot Password?
      </Link>
    </Container>
  );
};

Auth.propTypes = {
  history: PropTypes.string,
};

Auth.defaultProps = {
  history: '',
};

export default Auth;
