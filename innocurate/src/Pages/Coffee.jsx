import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Coffee extends Component {
	render() {
		return (
			<div>
			<Navbar />
			 <div className="container">
			<iframe
   				id="slideshow_frame"
   				src="https://archive.org/"
   				frameborder="0"
   				padding-top="15px"
   				padding-bottom="15px"
   				width="100%"
   				height="600px"
   				marginheight="10%"
   				marginwidth="0"
  				scrolling="yes">
  			</iframe>
  			<h1>Expand your mind!</h1>

				</div>
			</div>

		);

	}
}

export default Coffee