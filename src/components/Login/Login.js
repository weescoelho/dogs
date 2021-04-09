import React from "react";
import { Route, Routes } from "react-router";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="perdeu" element={<LoginPasswordLost/>}/>
        <Route path="reset" element={<LoginPasswordReset/>}/>
      </Routes>
    </div>
  );
};

export default Login;
