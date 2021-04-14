import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  // Adquire dados do usuário após logar.
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  //Autentica o usuário e senha e adquire o token.
  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    navigate("/login");
    window.localStorage.removeItem("token");
  }, [navigate]);

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
      else{
        setLogin(false)
      }
    };
    autoLogin();
  }, [userLogout]);

  // Value do Provider contem todos os dados do contexto que serão passados aos demais componentes.
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
