import axios from "axios";

{
  /*Firebase rest api is being used*/
}
const API_KEY = "AIzaSyBXagRCAsqcJNoQ1dUqjPdE1GNoeubxlE4";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token=response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export  function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
