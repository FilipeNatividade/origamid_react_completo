import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../utils/Api/Api";

const UserStorageContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(null);
      setLogin(false);
      localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

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
    try {
      setError(null);
      setLoading(true);
      const response = await Api.post("jwt-auth/v1/token", {
        username: username,
        password: password,
      });
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
      localStorage.setItem("token", response.data.token);
      getUser(response.data.token);
      navigate("/conta");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await Api.post(
            "jwt-auth/v1/token/validate",
            {
              key: "value",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.data.status !== 200) {
            throw new Error("Token inválido");
          }
          getUser(token);
        } catch (e) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);

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
        userLogout,
      }}
    >
      {children}
    </UserStorageContext.Provider>
  );
};

export const useUserStorage = () => React.useContext(UserStorageContext);
