import React, { useState } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const { loggedInStatus, handleLogout } = props;

  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleLogoutClick = () => {
    localStorage.clear();
    handleLogout();
  };

  const navBar = loggedInStatus === false ? (
    <Grid>
      <Grid.Column width={2}>
        <Menu secondary vertical>
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
        </Menu>
      </Grid.Column>
    </Grid>

  ) : (
    <Grid>
      <Grid.Column width={2}>
        <Menu secondary vertical>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="doctors"
            active={activeItem === 'doctors'}
            onClick={handleItemClick}
            as={Link}
            to="/doctors"
          />
          <Menu.Item
            name="nurses"
            active={activeItem === 'nurses'}
            onClick={handleItemClick}
            as={Link}
            to="/nurses"
          />
          <Menu.Item
            name="pharmacies"
            active={activeItem === 'pharmacies'}
            onClick={handleItemClick}
            as={Link}
            to="/pharmacies"
          />
          <Menu.Item
            name="Logout"
            onClick={() => handleLogoutClick()}
            as={Link}
            to="/"
          />
        </Menu>
      </Grid.Column>
    </Grid>
  );

  return navBar;
};

export default NavBar;
