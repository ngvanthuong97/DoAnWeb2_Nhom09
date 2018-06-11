import React, { Component } from 'react';
import { Route } from "react-router-dom";
import MainPage from '../MainPage'
import Rules from '../Rules'
import SignIn from '../SignIn'
import Register from '../Register'


class RouterURL extends React.Component {
	render() {
		return (
		    <div>
		    	<Route exact path="/" component={MainPage} />
		      	<Route path="/rules" component={Rules} />
		      	<Route path="/SignIn" component={SignIn} />
		      	<Route path="/Register" component={Register} />
		    </div>
		);
	}
}
export default RouterURL;
