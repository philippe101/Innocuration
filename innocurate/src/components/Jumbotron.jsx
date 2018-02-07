import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

class Jumbotron extends Component {
	render(){
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
				<h1 className="display-3">{this.props.title}</h1>
				<p className="lead">{this.props.subtitle}</p>
				</div>
				<div class="wrapper">
				<li>
				<div class="button">
				<Link className="button__link" to="/tea">Tea</Link>
				</div>
				</li>
				<li>
				</li>	
				<li>
				<div class="button">
				<Link className="button__link" to="/coffee">Coffee</Link>
				</div>
				</li>
				</div>
			</div>

		);
	}
}
  

export default Jumbotron