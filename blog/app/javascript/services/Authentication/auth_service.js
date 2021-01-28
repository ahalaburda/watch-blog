import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

class AuthService {

  //Login, after submit from the login form send values as params 
  //and if their are correct save in the localStorage
  
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          location.replace("http://localhost:3000");
        }
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          return error.response;
        }
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "users", {
      username,
      name,
      password
    });
  }

  getCurrentUser() {
    var user = "";
    var data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      user = data.user.name;
    }
    return user;
  }

  authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }

}

export default new AuthService();