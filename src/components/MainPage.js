import React, { Component } from 'react';
import Banner from './Banner'
import LoadPage from './LoadPage'

class MainPage extends Component {
	render() {
		return (
			<div>
				<Banner/>
				<LoadPage/>
			</div>
		);
	}
}
export default MainPage;
