import React from 'react';

import { useAuth } from '../../redux/auth';

const Dashboard = () => {
  const { logout } = useAuth();

  return <>
    <h1>You is Logged!</h1>
    <button type="button" onClick={logout}>Logout</button>
  </>;
}

export default Dashboard;