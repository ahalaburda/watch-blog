import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import swal from 'sweetalert';

import axios from "axios";

import AuthService from "../../services/Authentication/auth_service"

import './Login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    axios.post(`http://localhost:3000/api/v1/login?username=${this.state.username}&password=${this.state.password}`)
      .then(response => {
        if (response.data.token) {
          this.setState({
            loading: false,
            message: "ok"
          });
          localStorage.setItem("user", JSON.stringify(response.data));
          swal({title: 'Login Success',text: 'Redirecting...',icon: 'success', timer: 2000,buttons: false,})
            .then(() => {
              location.replace("http://localhost:3000/admin");
             })
        }
        return response.data;
      })
      .catch(error => {
        const resMessage = error.response.data.error;
        this.setState({
          loading: false,
          message: resMessage
        });
        swal({title: this.state.message ,text: 'Try again!',icon: 'error', timer: 2500,buttons: false,});
      })
    }

  render() {
  	return(
       <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src="https://cdn.onlinewebfonts.com/svg/img_311846.png" id="icon" alt="User Icon" />
            </div>
            <form onSubmit={this.handleLogin} >
              <input type="text" id="login" className="fadeIn second" name="username" value={this.state.username} placeholder="username" onChange={this.onChangeUsername} />
              <input type="password" id="password" className="fadeIn third" name="password" value={this.state.password} placeholder="password" onChange={this.onChangePassword}  />
              <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
  	)
  }
}
export default Login;
