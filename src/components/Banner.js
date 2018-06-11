import React, { Component } from 'react';

class Banner extends Component {
	render() {
		return (
			<div className="row">
			  <div className="col-md-12">
			    <div id="carousel-id" className="carousel slide" data-ride="carousel">
			      <ol className="carousel-indicators">
			        <li data-target="#carousel-id" data-slide-to={0} className="active" />
			        <li data-target="#carousel-id" data-slide-to={1} className="true" />
			        <li data-target="#carousel-id" data-slide-to={2} className />
			      </ol>
			      <div className="carousel-inner">
			        <div className="item active">
			          <img alt="First slide" src="images/banner01.jpg" width="100%" />
			        </div>
			        <div className="item">
			          <img alt="Second slide" src="images/banner02.jpg" width="100%" />
			        </div>
			        <div className="item">
			          <img alt="Third slide" src="images/banner03.jpg" width="100%" />
			        </div>
			        <div className="item">
			          <img alt="Four slide" src="images/banner04.jpg" width="100%" />
			        </div>
			      </div>
			      <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
			      <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
			    </div>
			  </div>
			</div>
		);
	}
}
export default Banner;