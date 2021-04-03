/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Icon, Header } from 'semantic-ui-react';

const nursespec = ['Registered Nurse', 'Cardiac Nurse', 'Certified Registered Nurse Anesthetist',
  'Clinical Nurse Specialist', 'Critical Care Nurse', 'ER Nurse',
  'Family Nurse Practitioner', 'Geriatric Nursing', 'Perioperative Nurse',
  'Mental Health Nurse', 'Nurse Educator', 'Nurse Midwife',
  'Nurse Practitioner', 'Oncology Nurse', 'Orthopedic Nurse',
  'Pediatric Nurse', 'Public Health Nurse', 'Travel Nurse'];

const NurseSpecialtyFilter = (props) => {
  const handleChange = (e) => {
    props.onSpecialtyChange(e.target.value);
  };

  return (
    <Segment style={{ height: 200, margin: 30 }} className="select">
      <Header icon>
        <Icon name="search" />
        Please Select The Specialty Of the Nurse.
      </Header>
      <select onChange={handleChange}>
        <option value="all">Select Specialty</option>
        {nursespec.map((spec) => (
          <option key={spec}>
            {spec}
          </option>
        ))}
      </select>
    </Segment>
  );
};

NurseSpecialtyFilter.propTypes = {
  onSpecialtyChange: PropTypes.func,
};

NurseSpecialtyFilter.defaultProps = {
  onSpecialtyChange: null,
};

export default NurseSpecialtyFilter;
