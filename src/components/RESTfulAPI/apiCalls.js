import axios from 'axios'

const LOCAL_URL = "https://guerilla-backend.azurewebsites.net/api/";

const LOGIN_URL = "https://guerilla-backend.azurewebsites.net/";

const USER = "user/";

const SURVEY = "survey/";

const RESPONSE = "response/";

const EMBED = "embed/";

class ApiCall {

    static login(userObject) {
        return (axios.post(LOGIN_URL + "login/", userObject));
    }

    static signup(userObject) {
        return (axios.post(LOGIN_URL + "login/register", userObject));
    }

    static test(token) {
        return (axios.get(LOCAL_URL + SURVEY + USER, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }))
    }
}

export default ApiCall;