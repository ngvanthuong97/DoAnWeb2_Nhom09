import React, { Component } from 'react';

class ShopingCart extends Component {
	render() {
		return (
			<div>
				<div className="row">
				  <center> <h2>GIỎ HÀNG </h2></center>
				  <div className="col-md-12"> 
				    <table className="table table-bordered">
				      <thead>
				        <tr>
				          <th scope="col">STT</th>
				          <th scope="col">ID</th>
				          <th scope="col">Tên sản phẩm</th>
				          <th scope="col">Giá tiền</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <th scope="row">1</th>
				          <td>SP001</td>
				          <td>Tên SP</td>
				          <td>Giá</td>
				        </tr>
				        <tr>
				          <td colSpan={4}>
				            <div className="col-sm-6 col-md-6">
				              <center> Tổng tiền: </center>
				            </div>
				            <div className="col-sm-6 col-md-6">
				              <div className="alignLeft"> $ </div>
				            </div>
				          </td>
				        </tr>
				      </tbody>
				    </table>
				  </div>
				  <br />
				</div>
			</div>
		);
	}
}
export default ShopingCart;