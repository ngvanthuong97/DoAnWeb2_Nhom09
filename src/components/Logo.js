import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Logo extends Component {
	render() {
		return (
			<div id='sizeimg'>
				<Link to="/" className="active"><img src="images/logo.gif"/></Link>
			</div>
		);
	}
}

export default Logo;