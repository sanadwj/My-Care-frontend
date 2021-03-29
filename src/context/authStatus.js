import { useState } from 'react';

const authStatus = () => {
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

  const checkAuthStatus = (auth) => {
    if (auth && auth.auth !== undefined && auth.auth.length !== 0) {
      setState({
        isAuth: true,
      });
    } else if (!auth && auth.auth === undefined && auth.auth.length === 0
      && state.isAuth === true) {
      setState({
        isAuth: false,
      });
    } else if (auth.errorMessage
      && !auth.errorMessage.response.status === 500 && state.isAuth === false) {
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