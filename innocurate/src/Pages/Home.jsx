import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';


class Home extends Component {
	render() {
		return (
			<div>
			<Navbar />
			<Jumbotron title="innocurate" subtitle="Expand your horizons!" />
			 <div className="container">
				<h2>Welcome</h2>
				<p>	
				</p>
				<li>
				<div class="button">
				<a href="button" class="button__link">TEA</a>
				</div>
				</li>
				<li>
				<div class="button">
				<a href="button" class="button__link">OR</a>
				</div>
				</li>
				<li>
				<div class="button">
				<a href="button" class="button__link">COFFEE</a>
				</div>
				</li>
				</div>
			</div>

		);

	}
}

export default Home