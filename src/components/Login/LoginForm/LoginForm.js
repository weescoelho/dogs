import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }
    const login = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', header)
    const response = await login.json();

    console.log(login);
    console.log(response);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="text" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
