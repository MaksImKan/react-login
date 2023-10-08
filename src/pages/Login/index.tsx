import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionTypes, ERoutes } from '../../shared/enums';
import { AuthContext } from '../../shared/providers/authProvider';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { authState, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      dispatch({ type: ActionTypes.AUTHENTICATE });
      authState && navigate(ERoutes.HOME);
    }
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
