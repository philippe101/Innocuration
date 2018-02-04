import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';


import Home from './Pages/Home.jsx';
import Tea from './Pages/Tea.jsx';
import Coffee from './Pages/Coffee.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Tea" component={Tea}/>
          <Route path="/Coffee" component={Coffee}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
