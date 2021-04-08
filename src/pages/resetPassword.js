import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { fetchResetPasswordsStartAsync } from '../actions/passwords/resetPassword';
import useForm from '../util/hooks';

const ResetPassword = () => {
  const reset = useSelector((state) => state.reset);
  const dispatch = useDispatch();
  console.log(reset);

  const { onChange, onSubmit, values } = useForm(resetPassword, {
    email: '',
    password: '',
  });

  function resetPassword() {
    dispatch(fetchResetPasswordsStartAsync(values));
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Token</label>
        <input
          type="text"
          required
          placeholder="Enter Your Email"
          onChange={onChange}
          value={values.reset_password_token}
        />
      </Form.Field>
      <Form.Field>
        <label>New Password</label>
        <input
          type="password"
          required
          placeholder="Enter Your Email"
          onChange={onChange}
          value={values.password}
        />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>

  );
};

export default ResetPassword;
