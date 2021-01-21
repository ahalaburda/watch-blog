import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../services/Home'
import Remote from '../services/Remote'
import Local from '../services/Local'
import Admin from '../services/Admin'
import About from '../components/About'
import Login from '../components/Login'
import Menu from '../components/Menu'

  /**
   * Main component wich render the aside, router and the main body
   *
   * 
   * TODO 	*- Admin view just for logged users
   * 		*- Change route link from login to logout
   *		*- Sign up view
   *		*- TDD
   *		*- 404 500 error page
   *
   * IN PROGRESS
   *		*- Authentication with jwt devise for login, logout and sign up
   *		*- Local new View
   */
function App() {
  return(
	<Router>
	<div id="colorlib-page">
		<Menu />
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
									<Route exact path="/about">
										<About />
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