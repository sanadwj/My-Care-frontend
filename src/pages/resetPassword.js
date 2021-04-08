import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form, Loader, Container } from 'semantic-ui-react';
import { fetchResetPasswordsStartAsync } from '../actions/passwords/resetPassword';
import useForm from '../util/hooks';

const ResetPassword = () => {
  const reset = useSelector((state) => state.reset);
  const forgot = useSelector((state) => state.forgot);

  const dispatch = useDispatch();
  console.log(reset);

  const { onChange, onSubmit, values } = useForm(resetPassword, {
    reset_password_token: '',
    password: '',
  });

  function resetPassword() {
    dispatch(fetchResetPasswordsStartAsync(values));
  }

  if (reset.reset && reset.reset.status === 200) {
    return <Redirect to="/login" />;
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
        {reset.isFetching === true ? <Loader active inline="centered" /> : ''}
      </div>
      <div>
        {forgot.status && forgot.status.status === 200 ? 'A Token is Send to your Email ' : ''}

      </div>
    </Container>

  );
};

export default ResetPassword;
