import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  // Caso o login ja esteja efetuado o usuário é redirecionado para a conta
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
     <div className={styles.forms}>
     <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
     </div>
    </section>
  );
};

export default Login;
