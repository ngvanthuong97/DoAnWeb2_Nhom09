import React, { Component } from 'react';

class Signin extends Component {
	render() {
		return (
			<div id="tabRegister">
        <img id="imgSignIn" src="images/Register.png"/>
        <form className="content bv-form" method="POST" action="#" id="login_popup_form" noValidate="novalidate"><button type="submit" className="bv-hidden-submit" style={{display: 'none', width: 0, height: 0}} />
          <div className="form-group popup_name has-feedback" id="popup_login">
            <br />
            <label className="control-label">Họ tên</label>
            <input id="popup-login-name" type="text" className="form-control login" name="name" placeholder="Nhập họ tên" data-bv-field="name" /><i className="form-control-feedback" data-bv-icon-for="name" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="notEmpty" data-bv-for="name" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Vui lòng nhập họ tên</small>
          </div>
          <div className="form-group popup_email has-feedback" id="popup_login">
            <label className="control-label">Email</label>
            <input id="popup-login-email" type="text" className="form-control login" name="email" placeholder="Nhập tài khoản Email" data-bv-field="email" /><i className="form-control-feedback" data-bv-icon-for="email" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="notEmpty" data-bv-for="email" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Vui lòng nhập Email</small><small className="help-block" data-bv-validator="regexp" data-bv-for="email" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Email không hợp lệ</small>
          </div>
          <div className="form-group popup_password has-feedback" id="popup_password">
            <label className="control-label">Mật khẩu</label>
            <input type="password" id="login_password" className="form-control login" name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" autoComplete="off" data-bv-field="password" /><i className="form-control-feedback" data-bv-icon-for="password" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="stringLength" data-bv-for="password" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Mật khẩu phải dài từ 6 đến 32 ký tự</small></div>
          <div className="form-group popup_password has-feedback" id="popup_password1">
            <label className="control-label">Nhắc lại mật khẩu</label>
            <input type="password" id="login_password1" className="form-control login" name="password1" placeholder="Mật khẩu từ 6 đến 32 ký tự" autoComplete="off" data-bv-field="password1" /><i className="form-control-feedback" data-bv-icon-for="password1" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="stringLength" data-bv-for="password1" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Mật khẩu phải dài từ 6 đến 32 ký tự</small></div>
          <div className="form-group popup_address has-feedback" id="popup_address">
            <label className="control-label">Địa chỉ</label>
            <input type="text" id="login_address" className="form-control login" name="address" placeholder="227 Nguyễn Văn Cừ, P.4, Q.5, Tp.HCM" autoComplete="off" data-bv-field="address" /><i className="form-control-feedback" data-bv-icon-for="address" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="stringLength" data-bv-for="address" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Địa chỉ phải dài từ 6 đến 32 ký tự</small></div>
          <div className="form-group popup_phone has-feedback" id="popup_phone">
            <label className="control-label">Số điện thoại</label>
            <input type="text" id="login_phone" className="form-control login" name="phone" placeholder="09xxxxxxxx" autoComplete="off" data-bv-field="phone" /><i className="form-control-feedback" data-bv-icon-for="phone" style={{display: 'none'}} />
            <span className="help-block ajax-message" />
            <small className="help-block" data-bv-validator="stringLength" data-bv-for="phone" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Số điện thoại phải từ 10-11 số</small></div>
          <div className="login-ajax-captcha" style={{display: 'none'}}>
            <div id="login-popup-recaptcha" />
          </div>
          <div className="form-group" id="error_captcha" style={{marginBottom: 15}}>
            <span className="help-block ajax-message" />
          </div>
          <div className="form-group">
            <button type="submit" id="login_popup_submit" className="btn btn-info btn-block">Đăng ký</button>
          </div>
        </form>
      </div>
		);
	}
}

export default Signin;
