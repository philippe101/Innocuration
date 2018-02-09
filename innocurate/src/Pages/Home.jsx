import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';
import Axios from "axios";


class Home extends Component {

	state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const  email  = event.target.name;
    const  password  = event.target.value;

    // Updating the input's state
    this.setState({
      email: email,
      password: password
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    Axios.post("/login", {email: this.state.email, password: this.state.password});
}

	render() {
		return (
			<div>
			<Navbar />
				
		        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Welcome!</button>

				<div id="myModal" class="modal fade" role="dialog">
					<div class="modal-dialog">
    					<div class="modal-content">
      						<div class="modal-header">
        						<button type="button" class="close" data-dismiss="modal">&times;</button>
        							<h4 class="modal-title">uCurate</h4>
      							</div>
     				 			<div class="modal-body">
        							<div className='modalLogin'>
		            					
		            					<input
								            value={this.state.email}
								            name="email"
								            onChange={this.handleInputChange}
								            type="text"
								            placeholder="email"
								          />
								          <input
								            value={this.state.password}
								            name="password"
								            onChange={this.handleInputChange}
								            type="text"
								            placeholder="password"
								          />
								          <button onClick={this.handleFormSubmit}>Submit</button>
		        					</div>
      							</div>
      						<div class="modal-footer">
       				 			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      						</div>
    					</div>
					</div>
				</div>
				<Jumbotron title="uCurate" subtitle=" "/>
				<div className="container">
					<h2><center>Don't let others tell you what you like!</center></h2>
				<p>
				</p>	
			</div>
		</div>

	);

	}
}


export default Home