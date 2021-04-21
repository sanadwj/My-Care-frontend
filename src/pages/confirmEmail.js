import React from 'react';
import { Container, Item } from 'semantic-ui-react';

const Confirm = () => (
  <Container className="confirmPage">
    <Item.Group relaxed="very">
      <Item>
        <Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content verticalAlign="middle">
          <Item.Header as="a">Please Confirm Your Email To SignIn</Item.Header>
          <Item.Description>
            <p>
              We just send email to confirm its you to your inbox.
            </p>
            <p>
              Also check your spam folder
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

  </Container>
);
export default Confirm;
