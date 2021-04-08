import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { fetchForgotPasswordsStartAsync } from '../actions/passwords/forgotPassword';
import useForm from '../util/hooks';

const ForgotPassword = () => {
  const forgot = useSelector((state) => state.forgot);
  const dispatch = useDispatch();
  console.log(forgot);

  const { onChange, onSubmit, values } = useForm(forgotPassword, {
    email: '',
    password: '',
  });

  function forgotPassword() {
    dispatch(fetchForgotPasswordsStartAsync(values));
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          onChange={onChange}
          value={values.email}
        />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>

  );
};

export default ForgotPassword;
