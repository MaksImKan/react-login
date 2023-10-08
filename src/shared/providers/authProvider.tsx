import { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';

import { ActionTypes } from '../enums';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

type Action = { type: ActionTypes.AUTHENTICATE } | { type: ActionTypes.LOGOUT };

interface AuthContextValue {
  authState: AuthState;
  dispatch: Dispatch<Action>;
}

const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return { isAuthenticated: true };
    case ActionTypes.LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextValue>({
  authState: initialState,
  dispatch: () => {
    undefined;
  },
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const savedAuthState = localStorage.getItem('authState');
    if (savedAuthState) {
      dispatch({ type: ActionTypes.AUTHENTICATE });
    }
  }, []);

  useEffect(() => {
    if (authState.isAuthenticated) {
      localStorage.setItem('authState', 'authenticated');
    } else {
      localStorage.removeItem('authState');
    }
  }, [authState]);

  const contextValue: AuthContextValue = {
    authState,
    dispatch,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
