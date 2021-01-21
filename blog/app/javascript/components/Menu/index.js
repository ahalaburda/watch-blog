import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as MenuBurger } from 'react-burger-menu'
import DarkModeToggle from '../../components/DarkMode';

import './Menu.css';
import Logo from 'images/logo.svg'


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      isMobile: null,
      active: null
    };
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

  displayHamburgerMenu = () => {
    return (
        <MenuBurger>
          <img src={Logo} alt="Blog logo" style={{display: 'block',width: '100%', filter: 'invert(1)'}} />
          <span id="bm-subtitle">Just a Simple Blog.</span>
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
            <li className="bm-li" >
              <Link to="/admin" >Admin</Link>
            </li>
            <li className="bm-li" >
              <Link to="/login" >Login</Link>
            </li>
            <li className="bm-li" >
              <Link to="/logout">Logout</Link>
            </li>
            <li className="bm-li" >
              <Link to="/Signup">Signup</Link>
            </li>
          </ul>
        </MenuBurger>
    );
  };

  displaySidebar = () => {
    return (
    <aside id="colorlib-aside" role="complementary" className="js-fullheight">
      <nav id="colorlib-main-menu" role="navigation">
        <img src={Logo} alt="Blog logo" style={{display: 'block',width: '100%'}} />
        <span>Just a Simple Blog.</span>
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
          <li className={this.state.active  === "/admin" ? "colorlib-active" : "Inactive"} onClick={this.toggleClass}>
            <Link to="/admin" >Admin</Link>
          </li>
          <li>
            <Link to="/login" >Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <DarkModeToggle />
      <div className="colorlib-footer">
        <img src="https://pbs.twimg.com/profile_images/1324826554485166082/BMGoOinS_400x400.jpg" alt="logo" width="150" height="150" />
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
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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