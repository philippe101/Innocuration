import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';


class Home extends Component {
	render() {
		return (
			<div>
			<Navbar />
			<Jumbotron title="uCurate" subtitle="Expand your horizons!"/>
			 <div className="container">
				<h2><center>Welcome</center></h2>
				<p>
				</p>	
			</div>
			</div>

		);

	}
}

export default Home