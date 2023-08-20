import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

type AuthContextType = {
  login: (user: User) => void;
  logout: () => void;
  logup: (user: User) => void;
  isAuthenticated: boolean;
  onboarding: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type User = {
  name: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onboarding, setOnboarding] = useState(false);

  const login = (user: User) => {};
  const logout = () => {};

  const logup = async ({ name, password }: User) => {
    try {
      console.log(name, password);
      await setDataUser({ name, password });
      setIsAuthenticated(true);
      setOnboarding(true);
    } catch (error) {
      console.log(error);
    }
  };

  const setDataUser = async (user: User) => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('@user', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, logup, onboarding }}
    >
      {children}
    </AuthContext.Provider>
  );
};
