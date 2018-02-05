import React, { Component } from 'react';
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
				<a href="button" class="button__link">TEA</a>
				</div>
				</li>
				<li>
				<p>	




				</p>
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
  

export default Jumbotron