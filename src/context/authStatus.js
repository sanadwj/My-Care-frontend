import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from '../actions/auth/userActions';

const authStatus = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isAuth: false,
  });

  const handleLogin = () => {
    setState({
      isAuth: true,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setState({
      isAuth: false,
    });
    dispatch(
      fetchAuthUser({
        authenticated: true,
        data: {},
      }),
    );
  };

  const checkAuthStatus = () => {
    if (localStorage.getItem('token')) {
      setState({
        isAuth: true,
      });
    } else {
      setState({
        isAuth: false,
      });
    }
  };

  return {
    state,
    handleLogin,
    handleLogout,
    checkAuthStatus,
  };
};

export default authStatus;
