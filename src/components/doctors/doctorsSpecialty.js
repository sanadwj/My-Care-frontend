import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctorSpecialtyStartAsync } from '../../actions/doctorSpecialtyActions';

const DoctorsSpecialtyList = (props) => {
  const { spec } = props;
  const doctorsList = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctorSpecialtyStartAsync(spec));
  }, [spec]);

  return (
    <h3>{doctorsList}</h3>
  );
};

export default DoctorsSpecialtyList;