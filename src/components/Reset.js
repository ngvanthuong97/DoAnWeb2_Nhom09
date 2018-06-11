import React, { Component } from 'react';

class Reset extends Component {
	render() {
		return (
			<div id="tabReset" className="tab-pane fade">
              <form className="content bv-form" method="POST" action="https://tiki.vn/customer/account/ajaxLogin?ref=https%253A%252F%252Ftiki.vn%252F" id="login_popup_form" noValidate="novalidate"><button type="submit" className="bv-hidden-submit" style={{display: 'none', width: 0, height: 0}} />
                <div className="form-group popup_email has-feedback" id="popup_login">
                  <br />
                  <label className="control-label">Email</label>
                  <input id="popup-login-email" type="text" className="form-control login" name="email" placeholder="Nhập địa chỉ Email" data-bv-field="email" /><i className="form-control-feedback" data-bv-icon-for="email" style={{display: 'none'}} />
                  <span className="help-block ajax-message" />
                  <small className="help-block" data-bv-validator="notEmpty" data-bv-for="email" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Vui lòng nhập Email</small><small className="help-block" data-bv-validator="regexp" data-bv-for="email" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Email không hợp lệ</small></div>
                <div className="login-ajax-captcha" style={{display: 'none'}}>
                  <div id="login-popup-recaptcha" />
                </div>
                <div className="form-group" id="error_captcha" style={{marginBottom: 15}}>
                  <span className="help-block ajax-message" />
                </div>
                <div className="form-group">
                  <button type="submit" id="login_popup_submit" className="btn btn-info btn-block">Cấp lại mật khẩu</button>
                </div>
              </form>
            </div>
		);
	}
}
export default Reset;