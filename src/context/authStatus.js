import { useState } from 'react';
import { useSelector } from 'react-redux';

const authStatus = () => {
  const auth = useSelector((state) => state.auth);
  const [state, setState] = useState({
    isAuth: false,
  });

  const handleLogin = () => {
    setState({
      isAuth: true,
    });
  };

  const handleLogout = () => {
    setState({
      isAuth: false,
    });
  };

  const checkAuthStatus = () => {
    if (localStorage.getItem('token')) {
      setState({
        isAuth: true,
      });
    } else if (!auth && auth.auth === undefined && auth.auth.length === 0
      && state.isAuth === true) {
      setState({
        isAuth: false,
      });
    } else if (auth.ErrorMessage
      && !auth.ErrorMessage.response.status === 500 && state.isAuth === false) {
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
