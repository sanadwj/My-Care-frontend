import React, { useState } from 'react';
import DoctorSpecialtyFilter from '../components/doctors/doctorSpecialtyFilter';
import DoctorsSpecialtyList from '../components/doctors/doctorsSpecialty';

const Doctors = () => {
  const [state, setState] = useState();

  const handleSpecialtyChange = (specialty) => {
    setState(specialty);
  };

  return (
    <div>
      <DoctorSpecialtyFilter onSpecialtyChange={handleSpecialtyChange} />
      <DoctorsSpecialtyList handleChange={handleSpecialtyChange} spec={state} />
    </div>
  );
};

export default Doctors;