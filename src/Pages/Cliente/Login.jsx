import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cliente from './Cliente';
import LoginCreate from '../Login/LoginCreate';
import LoginPasswordLost from '../Login/LoginPasswordLost';
import LoginPasswordReset from '../Login/LoginPasswordReset';
import { UserContext } from '../../Authcontext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section>
      <div>
        <Routes>
          <Route path="/cliente" element={<Cliente />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
