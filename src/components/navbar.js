import React, { useState } from 'react';
import { Menu, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBar = props => {
  // const { user, logout } = useContext(AuthContext);
  const { loggedInStatus, handleLogout } = props;

  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleLogoutClick = () => {
    axios.delete('http://localhost:5000/logout', { withCredentials: true }).then(() => {
      handleLogout();
    }).catch(error => {
      console.log('error', error);
    });
  };

  const navBar = loggedInStatus === 'LOGGED_IN' ? (
    <Grid>
      <Grid.Column width={2}>
        <Menu pointing secondary vertical size="larg" color="violet">
          <Menu.Menu position="right">
            <Menu.Item name="logout" as={Link} to="/">
              <Button type="button" onClick={() => handleLogoutClick()}>Logout</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  ) : (
    <Grid>
      <Grid.Column width={2}>
        <Menu pointing secondary vertical size="larg" color="violet">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />

          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to="/regitration"
            />
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  );

  return navBar;
};

export default NavBar;