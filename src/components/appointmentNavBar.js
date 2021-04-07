import React, { useState } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppointmentsNavBar = () => {

  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Grid>
      <Grid.Column width={2}>
        <Menu secondary vertical>
          <Menu.Item
            name="doctorAppointments"
            active={activeItem === 'doctorAppointments'}
            onClick={handleItemClick}
            as={Link}
            to="/doctorAppointments"
          />
          <Menu.Item
            name="nurseAppointments"
            active={activeItem === 'nurseAppointments'}
            onClick={handleItemClick}
            as={Link}
            to="/nurseAppointments"
          />
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default AppointmentsNavBar;
