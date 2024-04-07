import axios from 'axios';

{/*Firebase rest api is being used*/}
const API_KEY = 'AIzaSyBXagRCAsqcJNoQ1dUqjPdE1GNoeubxlE4';

export async function createUser(email,password){
    const response=await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+API_KEY,
      {
        email:email,
        password:password,
        returnSecureToken:true
      }
    );
}