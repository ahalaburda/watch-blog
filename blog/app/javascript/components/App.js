import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Posts/Posts'
import Post from './Post/Post'
import Remote from '../services/Remote'

const App = () => {
  return(
	<Router>
	<div id="colorlib-page">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
		<aside id="colorlib-aside" role="complementary" className="js-fullheight">
			<nav id="colorlib-main-menu" role="navigation">
				<span style={{position: 'absolute', top: '2%'}}>Just a Simple Watch Blog.</span>
				<ul>
					<li className="colorlib-active"><Link to="/">Home</Link></li>
					<li><Link to="/">Local</Link></li>
					<li><Link to="/remote">Remote</Link></li>
					<li><Link to="/">About</Link></li>
					<li><Link to="/">Login</Link></li>
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
									<Route path="/remote">
										<Remote />
									</Route>
									<Route path="/posts/:id">
										<Post />
									</Route>
									<Route exact path="/">
										<Posts />
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