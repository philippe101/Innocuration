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

			<iframe
   				id="slideshow_frame"
   				src="https://archive.org/details/naturesounds-soundtheraphy/Relaxing+Nature+Sounds+-+Birdsong+Sound.mp3"
   				frameborder="0"
   				padding-top="20px"
   				width="100%"
   				height="350px"
   				marginheight="10%"
   				marginwidth="0"
  				scrolling="no">
  			</iframe>

			
				</div>
			</div>
		
		);

	}
}

export default Tea