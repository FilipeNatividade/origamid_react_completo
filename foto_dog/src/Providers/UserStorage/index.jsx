import React from "react";
import { Api } from "../../utils/Api/Api";

const UserStorageContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const response = await Api.get("api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(response.data);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const response = await Api.post("jwt-auth/v1/token", {
      username: username,
      password: password,
    });
    localStorage.setItem("token", response.data.token);
    getUser(response.data.token);
  }

  return (
    <UserStorageContext.Provider
      value={{
        data,
        setData,
        login,
        setLogin,
        loading,
        setLoading,
        error,
        setError,
        getUser,
        userLogin,
      }}
    >
      {children}
    </UserStorageContext.Provider>
  );
};

export const useUserStorage = () => React.useContext(UserStorageContext);
