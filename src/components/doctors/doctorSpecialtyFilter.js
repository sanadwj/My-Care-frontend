/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const doctorspec = ['Allergy and immunology', 'Anesthesiology', 'Dermatology',
  'Diagnostic radiology', 'Emergency medicine', 'Family medicine',
  'Internal medicine', 'Medical genetics', 'Neurology',
  'Nuclear medicine', 'Obstetrics and gynecology', 'Ophthalmology',
  'Pathology', 'Pediatrics', 'Physical medicine and rehabilitation',
  'Psychiatry', 'Radiation oncology', 'Surgery', 'Urology'];

const DoctorSpecialtyFilter = (props) => {
  const handleChange = (e) => {
    props.onSpecialtyChange(e.target.value);
  };

  return (
    <Container>
      <select onChange={handleChange}>
        <option value="all">Select Specialty</option>
        {doctorspec.map((spec) => (
          <option key={spec}>
            {spec}
          </option>
        ))}
      </select>
    </Container>
  );
};

DoctorSpecialtyFilter.propTypes = {
  onSpecialtyChange: PropTypes.func,
};

DoctorSpecialtyFilter.defaultProps = {
  onSpecialtyChange: null,
};

export default DoctorSpecialtyFilter;
