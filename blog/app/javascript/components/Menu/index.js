import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as MenuBurger } from 'react-burger-menu'
import DarkModeToggle from '../../components/DarkMode';

import AuthService from "../../services/Authentication/auth_service"

import './Menu.css';
import Logo from 'images/logo.svg'

const lightLogo = "https://pbs.twimg.com/profile_images/1324826554485166082/BMGoOinS_400x400.jpg";
const darkLogo = "https://teams.sourceseek.com/logos/profile/limage-1460-46-photo.png";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      isMobile: null,
      active: null,
      showAdmin: false,
      currentUser: undefined,
      darkMode: true,
      logo: null
    };
  }

  logOut() {
    AuthService.logout();
    location.replace("http://localhost:3000");
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 992 ) {
      this.setState({ isMobile : true });
      this.displaySidebar()
    } else {
      this.setState({ isMobile : false });
      this.displaySidebar()
    }
  };

  toggleClass = () =>{
    this.setState({
      active : window.location.pathname });
  }

  setLogo = () => {
    const d = localStorage.getItem('darkMode');
     this.setState({ darkMode : d });
      if (this.state.darkMode) {
        this.setState({ logo : darkLogo});
      } else {
        this.setState({ logo : lightLogo});
      }
  }

  displayHamburgerMenu = () => {
    return (
        <MenuBurger>
          <img src={Logo} alt="Blog logo" style={{display: 'block',width: '100%', filter: 'invert(1)'}} />
          {this.state.currentUser == undefined ?
            <span>Just a Simple Blog.</span> :
            <span>Welcome back {this.state.currentUser}!</span>
          }
          <ul className="bm-ul">
            <li className="bm-li" >
              <Link to="/" >Home</Link>
            </li>
            <li className="bm-li" >
              <Link to="/local" >Local</Link>
            </li>
            <li className="bm-li" >
              <Link to="/remote" >Remote</Link>
            </li>
            {this.state.currentUser == undefined ?
              <>
                <li><Link to="/login" >Login</Link></li> 
                <li><Link to="/Signup">Signup</Link></li>
              </> :
              <>
                <li><Link to="/admin" >Admin</Link></li>
                <li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
              </>
            }
          </ul>
        </MenuBurger>
    );
  };

  displaySidebar = () => {
    return (
    <aside id="colorlib-aside" role="complementary" className="js-fullheight" >
      <nav id="colorlib-main-menu" role="navigation">
        <img src={Logo} alt="Blog logo" style={{display: 'block',width: '100%'}} />
        {this.state.currentUser == undefined ?
          <span>Just a Simple Blog.</span> :
          <span>Welcome back {this.state.currentUser}!</span>
        }
        <ul>
          <li className={this.state.active === "/" ? "colorlib-active" : "Inactive"} onClick={this.toggleClass}>
            <Link to="/" >Home</Link>
          </li>
          <li className={this.state.active === "/local" ? "colorlib-active" : "Inactive"} onClick={this.toggleClass}>
            <Link to="/local" >Local</Link>
          </li>
          <li className={this.state.active  === "/remote" ? "colorlib-active" : "Inactive"} onClick={this.toggleClass}>
            <Link to="/remote">Remote</Link>
          </li>
          {this.state.currentUser == undefined ?
            <>
              <li><Link to="/login" >Login</Link></li> 
              <li><Link to="/Signup">Signup</Link></li>
            </> :
            <>
              <li className={this.state.active  === "/admin" ? "colorlib-active" : "Inactive"} onClick={this.toggleClass}>
                <Link to="/admin" >Admin</Link>
              </li>
              <li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
            </>
          }
        </ul>
      </nav>
      <DarkModeToggle/>
      <div className="colorlib-footer">
        <img src={darkLogo} alt="logo" width="150" height="150" />
      </div>
    </aside>

    );
  };

  UNSAFE_componentWillMount() {
    if (window.innerWidth < 992 ) {
      this.setState({ isMobile : true });
    } else {
      this.setState({ isMobile : false });
    }
    this.toggleClass();
    // this.setLogo();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    const storage = localStorage.getItem('darkMode');
    this.setState({ darkMode : storage });

    window.addEventListener('storage', console.log("hola"));
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showAdmin: true
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('storage', this.setLogo);
  }

  render() {
    return (
        <nav id="sidebar">
          {this.state.isMobile ? this.displayHamburgerMenu() : this.displaySidebar()}
        }
      </nav>
    );
  }
}


export default Menu;