/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Loader, Container,
} from 'semantic-ui-react';
import useForm from '../util/hooks';
import { forgotPassword } from '../thunks/passwords/passwords';

const ForgotPassword = () => {
  const forgot = useSelector((state) => state.ForgotPasswordReducer.forgot);
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  console.log(forgot);
  const { onChange, onSubmit, values } = useForm(forgotPass, {
    email: '',
  });

  function forgotPass() {
    dispatch(forgotPassword(values));
  }

  if (forgot && forgot.status === 200) {
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
        {isFetching === true ? <Loader active inline="centered" /> : ''}
        {errors}
      </div>

    </Container>

  );
};

export default ForgotPassword;
