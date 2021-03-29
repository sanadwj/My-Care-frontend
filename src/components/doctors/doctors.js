import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctorSpecialtyStartAsync } from '../../actions/doctorSpecialtyActions';

const DoctorsList = (props) => {
  const { onSpecialtyChange } = props;
  const doctorsList = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctorSpecialtyStartAsync(onSpecialtyChange));
  }, [onSpecialtyChange]);

  return (
    <h3>{doctorsList}</h3>
  );
};