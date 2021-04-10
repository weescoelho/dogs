import React from "react";

// Types armazena todos os tipos de input

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  // valida o input de acordo com o tipo
  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  // retorna as validações para o input
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // passa a validação já ativada
    onBlur: () => validate(value),
  };
};

export default useForm;
