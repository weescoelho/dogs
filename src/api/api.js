export const BASE_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    url: BASE_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token){
  return {
    url: BASE_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization:'Bearer ' + token,
      },
    },
  };
}
