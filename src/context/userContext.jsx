import { createContext, useContext, useEffect, useState } from "react";

const rawDefaultlUser = window.localStorage.getItem("useralmacenamiento");

const defaultUser = JSON.parse(rawDefaultlUser);

const userContext = createContext(defaultUser);

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    window.localStorage.setItem("useralmacenamiento", JSON.stringify(user));
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
