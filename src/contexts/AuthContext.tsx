import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

type AuthContextType = {
  login: (password: string) => void;
  logout: () => void;
  logup: (user: User) => void;
  isAuthenticated: boolean;
  onboarding: boolean;
  loading: boolean;
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
  const [biometric, setBiometric] = useState(true);
  const [loading, setLoading] = useState(true);

  const login = async (password: string) => {
    try {
      const dataUser = await getDataUser();
      if (dataUser.password === password) {
        setIsAuthenticated(true);
        setOnboarding(true);
        console.log("logado");
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginBiometric = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        return;
      }
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      console.log("enrolled", enrolled);
      if (!enrolled) {
        return;
      }
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autenticação biométrica",
        fallbackLabel: "Autenticação não reconhecida",
      });
      if (!auth.success) {
        return;
      }
      setIsAuthenticated(true);
      console.log("auth", auth);
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
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const isUserAlready = async () => {
    const user = await getDataUser();
    console.log(user);
    if (user) {
      setOnboarding(true);
    }
  };

  useEffect(() => {
    // setLoading(true);
    isUserAlready();
    // setLoading(false);
    if (biometric && !isAuthenticated && !onboarding) {
      loginBiometric();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, logup, onboarding, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
