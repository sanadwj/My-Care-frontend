/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Loader, Container,
} from 'semantic-ui-react';
import { resetPassword } from '../thunks/passwords/passwords';
import useForm from '../util/hooks';

const ResetPassword = () => {
  const reset = useSelector((state) => state.ResetPasswordReducer.reset);
  const forgot = useSelector((state) => state.ForgotPasswordReducer.forgot);
  const isFetching = useSelector((state) => state.isFetchingReducer.fetching);
  const errors = useSelector((state) => state.errorsReducer);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(resetPass, {
    reset_password_token: '',
    password: '',
  });

  function resetPass() {
    dispatch(resetPassword(values));
  }

  if (reset && reset.status === 200) {
    return <Redirect to="/" />;
  }

  return (
    <Container>

      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Token</label>
          <input
            name="reset_password_token"
            type="password"
            required
            placeholder="Token"
            onChange={onChange}
            value={values.reset_password_token}
          />
        </Form.Field>
        <Form.Field>
          <label>New Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter Your Email"
            onChange={onChange}
            value={values.password}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
      <div>
        {isFetching === true ? <Loader active inline="centered" /> : ''}
        {errors}
      </div>
      <div>
        {forgot && forgot.status === 200 ? 'A Token is Send to your Email ' : ''}
      </div>
    </Container>

  );
};

export default ResetPassword;
