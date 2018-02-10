import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Tea.css';


class Tea extends Component {
	render() {
		return (
			<div>
			<Navbar />
			<div className="container">
			 <h1> Meditate</h1>
			<iframe
   				id="slideshow_frame"
   				src="https://archive.org/details/naturesounds-soundtheraphy/Relaxing+Nature+Sounds+-+Birdsong+Sound.mp3"
   				frameborder="0"
   				padding-top="20px"
   				width="100%"
   				height="400px"
   				marginheight="0"
   				marginwidth="0"
  				scrolling="no">
  			</iframe>
			 <h1>Clear your Mind!</h1>
			 <h3>(close your eyes focus on your breath)</h3>
				</div>
			</div>
		
		);

	}
}

export default Tea