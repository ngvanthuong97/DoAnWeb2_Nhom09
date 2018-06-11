import React, { Component } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import RouterURL from '../RouterURL/RouterURL';
import MainPage from '../MainPage';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

class App extends Component {
  render() {
    return (
    	<Router>
	      	<div>
		        <Nav/>
		        <div id='fixtop'>
		        	<RouterURL/>
		        </div>
				<Footer/>
	      	</div>
	    </Router>
      );
  }
}

export default App;
