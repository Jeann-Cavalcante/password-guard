import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
