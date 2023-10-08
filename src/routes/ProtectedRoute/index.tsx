import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { ERoutes } from '../../shared/enums';
import { AuthContext } from '../../shared/providers/authProvider';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(AuthContext);

  return authState ? children : <Navigate to={ERoutes.HOME} replace />;
};
