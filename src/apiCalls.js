const axios = require("axios");

export const register = (email, password, firstName, lastName) => {
  return axios
    .post("http://localhost:8080/register", {
      email,
      firstName,
      lastName,
      password,
    })
    .then((res) => res.data);
};
