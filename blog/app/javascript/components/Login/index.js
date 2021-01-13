import React from 'react'
import './Login.css'

function Login(){
	return(
     <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="https://cdn.onlinewebfonts.com/svg/img_311846.png" id="icon" alt="User Icon" />
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
            <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
	)
}
export default Login;