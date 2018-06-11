import React, { Component } from 'react';
import Logo from './Logo'
import { Link } from "react-router-dom"

class Nav extends Component {
	constructor(props){
		super(props);
		this.state={
			statusButton : true
		}
	}

	showButton = () => {
		if(this.state.statusButton){
			return <ul className="nav navbar-nav navbar-right">
						<li><Link to="/SignIn"><img src="images/iSignIn.png"/> Đăng Nhập</Link></li>
						<li><Link to="/Register"><img src="images/iResgister.png"/> Đăng Ký</Link></li>
		            </ul>
		} 
		else{
          	return <ul className="nav navbar-nav navbar-right">
			          	<li><Link to="/rules"><img src="images/list.png"/> Quy định</Link></li>
						<li><Link to="/cart"><img src="images/shopping-cart.png"/> Giỏ hàng</Link></li>
			          	<li><Link to="/Myaccount"><img src="images/iAccount.png"/> Tài khoản</Link></li>
			          	<li><Link to="/SignOut"><img src="images/iOut.png"/> Đăng Xuất</Link></li>
		            </ul>
		}
	}

	render() {
		return (
			<div className="row">
	          <div className="col-md-12">
	          	<nav id="fixNav">
			      <nav className="navbar navbar-default" role="navigation">
			        <div className="container-fluid">
			          {/* Brand and toggle get grouped for better mobile display */}
			          <div className="navbar-header">
			            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
			              <span className="sr-only">Toggle navigation</span>
			              <span className="icon-bar" />
			              <span className="icon-bar" />
			              <span className="icon-bar" />
			            </button>
			            <Logo/>
			          </div>
			          {/* Collect the nav links, forms, and other content for toggling */}
			          <div className="collapse navbar-collapse navbar-ex1-collapse">
			            {this.showButton() }
			          </div>
			        </div>
			      </nav>
			      </nav>
	          </div>
	        </div>
		);
	}
}
export default Nav;