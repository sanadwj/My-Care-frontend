import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const ResetPassword = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input type="email" required placeholder="Enter Your Email" />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>

  );
};

export default ResetPassword;
