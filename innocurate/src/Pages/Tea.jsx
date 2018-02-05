import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Tea.css';


class Tea extends Component {
	render() {
		return (
			<div>
			<Navbar />
			<Jumbotron title="meditate" subtitle="" />
			 <div className="container">
			
				<h2>Welcome</h2>
				<p>
				</p>
				</div>
			</div>
		
		);

	}
}

export default Tea