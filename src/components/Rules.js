import React, { Component } from 'react';

class Rules extends Component {
	render() {
		return (
			<div className="row">
			  <div className="col-md-12">
			    <img src="images/rules.png" width="100%" alt />
			    <br />
			    <h1>Quy định:
			      <br />
			      <br />
			      <p>
			        1.	Sản phẩm: sản phẩm đấu giá là những sản phẩm liên quan đến thời trang(tất cả các sản phẩm quần áo, trang sức, phụ kiện) dành chon am và nữ.
			      </p>
			      <br />
			      <p>
			        2.	Người tham gia đấu giá: Người tham gia đấu giá tài sản là cá nhân, tổ chức được phép tham gia đấu giá để mua tài sản bán đấu giá theo quy định của Nghị định này và các quy định khác của 
			      </p>
			      <br />
			      <p>
			        3.	Người không được phép tham gia đấu giá: Người không có năng lực hành vi dân sự, người mất hoặc bị hạn chế năng lực hành vi dân sự theo quy định của Bộ luật Dân sự hoặc người tại thời điểm đấu giá không nhận thức, làm chủ được hành vi của mình.
			      </p>
			      <br />
			      <p>
			        4.	Đăng kí: Đăng kí đầy đủ thông tin quy định của trang đấu giá mà BQT yêu cầu: Họ tên, địa chỉ, mail, SĐT.
			      </p>
			      <br />
			      <p>
			        5.	Giá: Giá khởi điểm của sản phẩm là 1000VNĐ.Ngoài giá khởi điểm chủ sản phẩm có thể đưa thê giá sàn. Giá sàn là mức giá tối thiểu để có thể bán sản phẩm, khi kết thúc phiên đấu giá mà giá vẫn chưa đạt đến hoặc hơn giá sàn thì sản phẩm sẻ không được bán theo như mong muốn của người chủ sản phẩm.
			      </p>
			      <br />
			      <p>
			        6.	Bước giá: Mỗi lần đấu giá sẻ tang thêm 5000VNĐ. Bước giá là mức giá mong muốn tăng thêm khi có người ra giá của chủ sản phẩm. Bước giá là mức giá tối thiểu bắt buộc phải tăng thêm cho người ra giá kế tiếp, tuy nhiên người ra giá kế tiếp có quyền ra giá tăng thêm lớn hơn nhiều lần bước giá (nếu người chủ sản phẩm không quy định bước giá tối đa).
			      </p>
			      <br />
			      <p>
			        7.	Tham gia đấu giá: tất cả các thành viên điều có quyền tham gia đấu giá trừ những người bị hội đồng đấu giá cấm tham gia đấu giá. Tham gia đấu giá được chia làm 2 giai đoạn: (giai đoạn khởi đầu từ lúc bắt đầu phiên đấu giá cho đến trước thời gian kết thúc 30 phút, giai đoạn về đích là 30 phút cuối cùng của phiên đấu giá) thành viên phải có ít nhất 1 lần đặt giá ở giai đoạn khởi đầu thì mới có thể tiếp tục tham gia đấu giá tiếp theo ở giai đoạn về đích, nghĩa là giai đoạn khởi đầu không có đặt giá thì giai đoan về đích nếu có đặt giá thì giá đó sẽ không hợp lệ (giá đặt ở giai đoạn về đích là giá tiếp theo của giai đoạn khởi đầu). Người tạo đấu giá không được tham gia đấu giá chính sản phẩm của mình.
			      </p>
			      <br />
			      <p>
			        8.	Thắng đấu giá: người thắng đấu giá là người có giá cao nhất và hợp lệ trước khi hết thời gian đấu giá (có thể là cao nhất ở giai đoạn về đích hoặc giá cao nhất ở giai đoạn khởi đầu). Nếu 2 người đấu cùng một giá cao nhất thì người có thời gian sớm hơn sẽ hợp lệ. (Nếu tại phút cuối cùng có nhiều người đặt giá thì người đặt giá cao nhất và hợp lệ sẽ chiến thắng, nếu một người đặt nhiều giá cùng lúc thì sẽ tính mức giá cao nhất. Nếu tại phút cuối cùng có 2 người đặt trùng một mức giá cao nhất thì người nào được Facebook xếp trước sẽ là người chiến thắng). Thời gian để tính người thắng đấu giá là thời gian ghi nhận trên lịch sử comment đặt giá.
			      </p>
			      <br />
			      <p>
			        9.	Hình thức thanh toán: Thanh toán khi nhận hàng
			      </p>
			      <br />
			      <p>
			        10.	Địa điểm nhận hàng: do người chủ sản phẩm quyết định, hoặc do người chủ và người thắng đấu giá thương lượng quyết định.
			      </p>
			      <br />
			      <p>
			        11.	Đặt giá (đấu giá, ra giá, bid): người tham gia đấu giá phải đặt giá bằng giá của người trước + số lớn hơn hoặc bằng bước giá trong cùng chủ đề bài viết đấu giá. Nếu đặt giá không hợp lệ thì xem như lần đặt giá đó không có giá trị. Giá đã đặt ra rồi thì không được chỉnh sửa, nếu hội đồng đấu giá phát hiện ra người nào chỉnh sửa giá đấu thì xem như người đó mất quyền tham gia đấu giá phiên này. Do vậy nếu đặt giá bị sai thì đặt lại giá khác chứ không được chỉnh sửa
			      </p>
			      <br />
			      <p>
			        12.	Thời gian nhận sản phẩm đấu giá thắng: thông thường là 1 tuần sau khi kết thúc phiên đấu giá, hoặc có thể do người chủ sản phẩm quy định (tuy nhiên không được đánh đố người tham gia). Nếu sau khi hết thời hạn nhận sản phẩm thắng mà người thắng cuộc không liên lạc để nhận sản phẩm thì người có mức giá phía trước có quyền nhận sản phẩm. Nếu người thắng cuộc không liên hệ với chủ sản phẩm để nhận hàng trong thời gian nhận hàng thì không được khiếu nại gì về sau, đồng thời nếu quá 2 lần không liên lạc nhận hàng thắng đấu giá trong các phiên đấu giá khác thì người này bị cấm tham gia đấu giá vĩnh viễn. (cần phân biệt rỏ "không liên hệ với người tạo đấu giá" và "từ chối nhận sản phẩm thắng đấu giá" để tránh lầm lẫn trong các quy định).
			      </p>
			      <br />
			      <p>
			        13.	Từ chối sản phẩm: nếu người thắng đấu giá khi đến nhận sản phẩm đấu giá mà phát hiện ra sản phẩm nhận được không phải đúng như thông tin người tạo đấu giá cung cấp thì có quyền từ chối nhận sản phẩm, đồng thời phải báo ngay với hội đồng đấu giá để xác nhận. Hoặc khi đến nhận sản phẩm thì sản phẩm bị trục trặc, hư hỏng, sứt mẻ, không còn nguyên vẹn thì có thể từ chối không nhận. ("từ chối nhận sản phẩm" khác với "không liên lạc nhận sản phẩm"). Nếu người thắng đấu giá từ chối nhận sản phẩm với lý do không chính đáng thì sẽ phải đóng phạt 15% giá trị thắng đấu giá cho hội. (10% sẽ được đưa và quỹ hội, 5% sẽ được chuyển cho người chủ sản phẩm). Nếu không đóng phạt sẽ bị cấm tham gia đấu giá vĩnh viễn và cho ra khỏi hội.
			      </p>
			      <br />
			    </h1>
			    <h1>Điều khoản:
			      <br />
			      <br />
			      <p>
			        Căn cứ Điều 13 Nghị định 62/2017/NĐ-CP quy định về điều kiện thực hiện hình thức đấu giá trực tuyến bao gồm các điều kiện:
			      </p>
			      <br />
			      <p>
			        Thứ nhất, tổ chức đấu giá tài sản thiết lập Trang thông tin điện tử để tổ chức cuộc đấu giá dưới hình thức đấu giá trực tuyến theo quy định của Luật đấu giá tài sản phải đáp ứng các điều kiện sau đây:
			      </p>
			      <br />
			      <p>
			        Có hệ thống hạ tầng kỹ thuật để thực hiện đấu giá trực tuyến;
			      </p>
			      <br />
			      <p>
			        Có đội ngũ nhân viên điều hành hệ thống kỹ thuật Trang thông tin điện tử đấu giá trực tuyến;
			      </p>
			      <br />
			      <p>
			        Có phương án, giải pháp kỹ thuật bảo đảm vận hành an toàn hệ thống kỹ thuật Trang thông tin điện tử đấu giá trực tuyến.
			      </p>
			      <br />
			      <p>
			        Thứ hai, hệ thống hạ tầng kỹ thuật để thực hiện cuộc đấu giá trực tuyến phải có các chức năng tối thiểu sau đây:
			      </p>
			      <br />
			      <p>
			        Đảm bảo tính an toàn, bảo mật về tài khoản truy cập và toàn vẹn dữ liệu, việc tham gia trả giá, giá đã trả và các thông tin về người tham gia đấu giá;
			      </p>
			      <br />
			      <p>
			        Ghi nhận và lưu trữ tất cả mức giá được trả trong cuộc đấu giá, việc rút lại giá đã trả và những thông tin cần thiết khác trong quá trình diễn ra cuộc đấu giá trực tuyến;
			      </p>
			      <br />
			      <p>
			        Hiển thị công khai, trung thực giá trả của người tham gia đấu giá; trích xuất được lịch sử việc trả giá trên hệ thống đấu giá trực tuyến;
			      </p>
			      <br />
			      <p>
			        Hiển thị mức giá cao nhất được hệ thống đấu giá trực tuyến ghi nhận 30 giây một lần để những người tham gia đấu giá có thể xem được.
			      </p>
			      <br />
			      <p>
			        Như vậy, để thực hiện hình thức đấu giá trực tuyến cần phải có hệ thống hạ tầng kỹ thuật để thực hiện đấu giá trực tuyến. Căn cứ theo khoản 2 Điều 13 Nghị định 62/2017/NĐ-CP quy định chi tiết đối với hệ thống hạ tầng kỹ thuật để đấu giá trực tuyến cần phải có 04 chức năng tối thiểu như trên.
			      </p>
			      <br />
			      <p>
			        Căn cứ pháp lý:
			      </p>
			      <br />
			      <p>
			        Điều 13 Nghị định 62/2017/NĐ-CP quy định chi tiết một số Điều và biện pháp thi hành Luật đấu giá tài sản;
			      </p>
			      <br />
			    </h1>
			  </div>
			</div>

		);
	}
}

export default Rules;