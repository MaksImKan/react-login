import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionTypes, ERoutes } from '../../shared/enums';
import { AuthContext } from '../../shared/providers/authProvider';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = () => {
    dispatch({ type: ActionTypes.LOGOUT });
    navigate(ERoutes.LOGIN);
  };

  return (
    <div>
      <div style={{ color: 'black' }}>Home</div>
      <button type="button" onClick={handleLogOut}>
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
