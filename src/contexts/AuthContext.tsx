import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState, useCallback } from 'react';

type AuthContextType = {
  login: (password: string) => void;
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

  const login = async (password: string) => {
    try {
      const dataUser = await getDataUser();
      if (dataUser.password === password) {
        setIsAuthenticated(true);
        console.log('logado');
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

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

  const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const isUserAlready = async () => {
    const user = await getDataUser();
    if (user) {
      setOnboarding(true);
    }
  };

  useEffect(() => {
    isUserAlready();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, logup, onboarding }}
    >
      {children}
    </AuthContext.Provider>
  );
};
