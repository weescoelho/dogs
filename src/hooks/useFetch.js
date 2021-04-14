import React from 'react'

const useFetch = () => {

  //states primários
  const [data, setData] = React.useState(null)
  const [error,setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


// função de request
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try{
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if(response.ok === false) throw new Error(json.message); // se o request falhar cria um erro.
    }
    catch(err){
      json = null; // zera o json caso haja erro.
      setError(err.message)
    }
    finally{
      setData(json);
      setLoading(false);
      return {response,json}
    }
  },[])

  return {
    data,
    error,
    loading,
    request,
  }
}

export default useFetch
