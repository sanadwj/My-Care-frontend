import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logOut } from '../thunks/auth/auth';

const NavBar = (props) => {
  const { loggedInStatus, handleLogout } = props;
  const auth = useSelector((state) => state.authReducer.authenticated);
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleLogoutClick = () => {
    dispatch(logOut());
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
            to="/"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
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
            to="/home"
          />
          <Dropdown item text="Appointments" className="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item
                text="Doctor Appointments"
                as={Link}
                to="/doctorappointments"
              />
              <Dropdown.Item
                text="Nurse Appointments"
                as={Link}
                to="/nurseappointments"
              />
            </Dropdown.Menu>
          </Dropdown>
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
