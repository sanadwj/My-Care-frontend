/* eslint-disable react/prop-types */
import React from 'react';

const doctorspec = ['Allergy and immunology', 'Anesthesiology', 'Dermatology',
  'Diagnostic radiology', 'Emergency medicine', 'Family medicine',
  'Internal medicine', 'Medical genetics', 'Neurology',
  'Nuclear medicine', 'Obstetrics and gynecology', 'Ophthalmology',
  'Pathology', 'Pediatrics', 'Physical medicine and rehabilitation',
  'Psychiatry', 'Radiation oncology', 'Surgery', 'Urology'];

const DoctorSpecialty = (props) => {
  const handleChange = (e) => {
    props.onSoecialtyChenge(e.target.value);
  };

  return (
    <h3>
      <select onChange={handleChange}>
        <option value="all">CATEGORIES</option>
        {doctorspec.map((spec) => (
          <option key={spec}>
            {spec}
          </option>
        ))}
      </select>
    </h3>
  );
};

export default DoctorSpecialty;
