import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Prompt, withRouter} from "react-router-dom";

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isBlocking : false,
      isStatus : true,
      isTranslate : null,
      txtemail : null,
      txtpassword : null,
      wanning : null
    };
  }

  isInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      isBlocking : target.value.length > 0,
      [name]: value
    });
  }

  submitForm = (event) => {
    if(this.state.isBlocking && this.state.txtemail == 123 && this.state.txtpassword == 'abc')
    {
      this.setState({
      isBlocking: false,
      isStatus : false,
      isTranslate : '/Home'
    });
    }
    else
    {
      event.preventDefault();
    event.target.reset();
    this.setState({
      isBlocking: false,
      wanning : 'Tài khoản/Mật khẩu không chính xác'
    });
    }
    }

  render() {
    return (
      <div id="tabSignIn">
        <img id="imgSignIn" src="images/SignIn.png"/>
        <form onSubmit={ (e) => this.submitForm(e) } className="content bv-form" method="" action={this.state.isTranslate} id="login_popup_form">
          <div className="form-group popup_email has-feedback" id="popup_login">
            <br />
            <label>Email</label>
            <input id="popup-login-email" type="text" className="form-control login" name="txtemail" 
            placeholder="Email..." data-bv-field="email" onChange={ (event) => this.isInputChange(event)} />
            <i className="form-control-feedback" data-bv-icon-for="email" style={{display: 'none'}} />
          </div>
          <div className="form-group popup_password has-feedback" id="popup_password">
            <label>Mật khẩu</label>
            <input type="password" id="login_password" className="form-control login" name="txtpassword" 
            placeholder="Password..." autoComplete="off" data-bv-field="password" onChange={(event) => this.isInputChange(event)} />
            <i className="form-control-feedback" data-bv-icon-for="password" style={{display: 'none'}} />
          </div>
          <center style={{color: 'red'}}>{this.state.wanning}</center>
          <br/>
          <div className="form-group">
            <button className="btn btn-info btn-block">Đăng nhập</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;