import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="row">
			  <div className="col-md-12">
			    <footer className="clearfix">
			      <div className="col-sm-6 col-md-4">
			        <h4>THÔNG TIN NHÓM</h4>
			        <p>
			          <br />
			          1560569 - Nguyễn Minh Thương
			          <br />
			          <br />
			          1560570 - Nguyễn Văn Thưởng
			          <br />
			          <br />
			          1560650 - Trần Thị Ngọc Tuyết
			          <br />
			        </p>
			      </div>
			      <div className="col-sm-6 col-md-4">
			        <h4>LIÊN HỆ</h4>
			        <p>
			          <br />
			          Hotline: 01629715724
			          <br />
			          <br />
			          Địa chỉ văn phòng: 227 Nguyễn Văn Cừ, P.4, Q.5, Tp.HCM
			          <br />
			          <br />
			          Email: ngvanthuong97@gmail.com
			          <br />
			        </p>
			      </div>
			      <div className="col-sm-6 col-md-4">
			        <h4>KẾT NỐI</h4>
			        <ul>
			          <li><a href="https://www.facebook.com/ngvanthuong97" target="_blank"><img src="images/icon_fb.png" alt="true" />	Facebook</a></li>
			          <li><a href="https://www.skype.com/en/" target="_blank"><img src="images/icon_skype.png" alt="true" />	Skype</a></li>
			          <li><a href="https://www.youtube.com/channel/UCgtUO8sFyj9vt6WlSLJSyxA" target="_blank"><img src="images/icon_youtube.png" alt="true" />	Youtube</a></li>
			        </ul>
			      </div>
			    </footer>
			    <center>Copyright @2018 3Tteam.com</center>
			  </div>
			</div>
		);
	}
}
export default Footer;