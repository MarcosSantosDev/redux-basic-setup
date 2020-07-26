import React, { useState, useEffect } from 'react';

import { useAuth } from '../../redux/auth';

const Login = () => {
  const [logged, setLogged] = useState();

  const { authentication, auth } = useAuth();

  const handleLogin = () => {
    const data = {
      email: 'marcos@test.com',
      password: '123456',
    };

    authentication(data);
  };

  useEffect(() => {
    if (auth.success) {
      setLogged(auth.success);
    } else {
      setLogged(auth.error);
    }
  }, [auth.success, auth.error]);

  return (
    <div>
      <div>Hello Redux</div>
      <div>{logged}</div>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
