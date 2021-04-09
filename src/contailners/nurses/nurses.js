import React, { useState } from 'react';
import NurseSpecialtyFilter from '../../components/nurses/nurseSpecialtyFilter';
import NursesSpecialtyList from '../../components/nurses/nursesSpecialty';

const Nurses = () => {
  const [state, setState] = useState();

  const handleSpecialtyChange = (specialty) => {
    setState(specialty);
  };

  return (
    <div className="doctors">
      <NurseSpecialtyFilter onSpecialtyChange={handleSpecialtyChange} />
      <NursesSpecialtyList handleChange={handleSpecialtyChange} spec={state} />
    </div>
  );
};

export default Nurses;
