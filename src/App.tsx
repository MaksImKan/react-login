import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { ERoutes } from './shared/enums';
import { AuthContextProvider } from './shared/providers/authProvider';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <AuthContextProvider>
          <Routes>
            <Route
              path={ERoutes.HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path={ERoutes.LOGIN} element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default App;
