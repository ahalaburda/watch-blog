import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Post'
import Home from '../services/Home'
import Remote from '../services/Remote'
import Local from '../services/Local'
import Admin from '../services/Admin'
import Login from '../components/Login'

function App() {
  const navLink = [
    { id: 1, link: "/", text: "Home" },
    { id: 2, link: "/remote", text: "Remote" },
    { id: 3, link: "/local", text: "Local" },
    { id: 4, link: "/about", text: "About" },
    { id: 5, link: "/login", text: "Login" },
    { id: 6, link: "/admin", text: "Admin" }
  ];
  const [activeId, setActiveId] = useState();

  return(
	<Router>
	<div id="colorlib-page">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
		<aside id="colorlib-aside" role="complementary" className="js-fullheight">
			<nav id="colorlib-main-menu" role="navigation">
				<span style={{position: 'absolute', top: '2%'}}>Just a Simple Watch Blog.</span>
				<ul>
					{navLink.map((val, index) => (
			          <li key={index} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "colorlib-active" : "Inactive"}>
			           <Link to={val.link}>{val.text}</Link>
			          </li>
			        ))}
				</ul>
			</nav>
			<div className="colorlib-footer">
				<img src="https://pbs.twimg.com/profile_images/1324826554485166082/BMGoOinS_400x400.jpg" alt="logo" width="150" height="150" />
			</div>
		</aside>
		<div id="colorlib-main">
			<section className="ftco-section ftco-no-pt ftco-no-pb">
				<div className="container">
					<div className="row d-flex">
						<div className="col-xl-12 py-5 px-md-5">
							<div className="row pt-md-4">
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/local">
										<Local />
									</Route>
									<Route exact path="/remote">
										<Remote />
									</Route>
									<Route path="/posts/:id">
										<Post />
									</Route>
									<Route exact path="/login">
										<Login />
									</Route>
									<Route exact path="/admin">
										<Admin />
									</Route>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
	</Router>
  )
}

export default App;