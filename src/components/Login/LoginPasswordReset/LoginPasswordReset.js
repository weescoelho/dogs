import React from "react";
import { PASSWORD_RESET } from "../../../api/api";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import Error from '../../../components/Helper/Error'
import { useNavigate } from "react-router";
import Head from "../../Helper/Head/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if(response.ok) navigate('/login')
  }

  return (
    <div>
      <Head title="Reset a senha"/>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Trocando a senha...</Button>
        ) : (
          <Button>Resetar senha</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default LoginPasswordReset;
