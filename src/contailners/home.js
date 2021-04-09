import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Segment } from 'semantic-ui-react';
import doctor from '../style/assets/doctor.png';
import nurse from '../style/assets/nurse.png';
import pharmacy from '../style/assets/pharmacy.png';

const Home = () => (
  <div className="homeDiv">
    <h2 className="welcome">Welcome</h2>
    <Segment
      className="homeseg"

    >
      <Item.Group
        divided
        className="homegr"
        as={Link}
        to="/doctors"
      >
        <Item>
          <Item>
            <img className="img" src={doctor} alt="Logo" />
          </Item>

          <Item.Content>
            <Item.Header>Doctors</Item.Header>
            <Item.Description>
              Here you can serch doctor needed by specialty to create appointment
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment
      className="homeseg"

    >
      <Item.Group
        divided
        className="homegr"
        as={Link}
        to="/nurses"
      >
        <Item>
          <Item>
            <img className="img" src={nurse} alt="Logo" />
          </Item>

          <Item.Content>
            <Item.Header>Nurses</Item.Header>
            <Item.Description>
              Here you can serch nurse needed by specialty to create appointment
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment
      className="homeseg"

    >
      <Item.Group
        divided
        className="homegr"
        as={Link}
        to="/pharmacies"
      >
        <Item>
          <Item>
            <img className="img" src={pharmacy} alt="Logo" />
          </Item>

          <Item.Content>
            <Item.Header>Pharmacies</Item.Header>
            <Item.Description>Here you can serch pharmacy and place your order</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </div>
);

export default Home;
