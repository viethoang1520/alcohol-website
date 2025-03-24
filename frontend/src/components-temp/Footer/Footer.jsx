import React from 'react'
import './Footer.scss'
import { Col, Row } from 'antd'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;
export default function Footer() {
  return (
    <>
      <div className="footer-upper">
        <div className='footer-block container'>
          <Row className="footer-upper-block">
            <Col className='mail-register' xs={24} md={4}>
              <Icon className="footer-mail-icon" icon="material-symbols:mail-outline" />
              <p>ĐĂNG KÍ NHẬN TIN</p>
            </Col>
            <Col xs={24} md={16}>
              <Search
                className='mail-input'
                placeholder="Nhập email của bạn"
                allowClear
                enterButton="Đăng kí"
                size="large"
              // onSearch={onSearch}
              />
            </Col>
            <Col xs={24} md={4}>
              <Link className='connect-me-block'>
                <p>KẾT NỐI VỚI CHÚNG TÔI</p>
                <Icon className='facebook-icon' icon="logos:facebook" />
              </Link>
            </Col>
          </Row>
        </div>
        <br /><hr />
      </div>
      <div className="footer-middle">
        <Row className='container'>
          <Col xs={24} md={10}>
            <div className='footer-middle-logo'> HOÀNG DƯƠNG </div>
            <br />
            <p>HOANGDUONG.VN chuyên phân phối sỉ và lẻ các loại Vang, Bia từ các nước trên thế giới. Với sứ mệnh lan tỏa văn hóa ẩm thực rượu vang tới nhiều người Việt hơn nữa. HOANGDUONG.VN luôn nỗ lực tìm kiếm và phân phối các dòng Vang cao cấp với giá cả tốt nhất đến người tiêu dùng Việt.</p>
          </Col>
          <Col xs={24} md={14}>
            <Row>
              <Col xs={24} md={8} lg={8} xl={8}>
                <ul>
                  <li className='footer-item-title'>CHÍNH SÁCH</li>
                  <li>TÌM KIẾM</li>
                  <li>ĐỔI TRẢ</li>
                  <li>CHÍNH SÁCH BẢO MẬT</li>
                  <li>CHÍNH SÁCH ĐỔI TRẢ</li>
                  <li>ĐIỀU KHOẢN DỊCH VỤ</li>
                  <li>LIÊN HỆ</li>
                </ul>
              </Col>
              <Col xs={24} md={8} lg={8} xl={8}>
                <ul>
                  <li className='footer-item-title'>SẢN PHẨM</li>
                  <li>SẢN PHẨM KHUYẾN MÃI</li>
                  <li>SẢN PHẨM BÁN CHẠY</li>
                  <li>SẢN PHẨM NỔI BẬT</li>
                  <li>TẤT CẢ SẢN PHẨM</li>
                  <li>SẢN PHẨM MỚI</li>
                  <li>SẢN PHẨM CAO CẤP</li>
                </ul>
              </Col>
              <Col xs={24} md={8} lg={8} xl={8}>
                <ul>
                  <li className='footer-item-title'>MENU</li>
                  <li>TRANG CHỦ</li>
                  <li>RƯỢU VANG</li>
                  <li>RƯỢU MẠNH</li>
                  <li>QUÀ TẶNG</li>
                  <li>TIN TỨC</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='container'>
          <Col className='footer-address' xs={24} md={10}>
            <p> Địa chỉ: 107/6/5 Đường số 38, P. Hiệp Bình Chánh, TP. Thủ đức, TP. Hồ Chí Minh. Email: ruounhap.net@gmail.com | Hỗ trợ Hotline/Zalo/Wiber: 0906.648.244. Cam kết có trách nhiệm, đồng ý với các điều khoản của trang web này. Nội dung này dành cho những người trong độ tuổi uống rượu hợp pháp, vui lòng không chia sẻ hoặc chuyển tiếp cho bất kỳ ai chưa đủ tuổi vị thành niên. Đừng lái xe khi đã uống rượu, bia. Hãy thưởng thức có trách nhiệm, không bán rượu bia cho người dưới 18 tuổi.</p>
          </Col>
          <Col className='footer-map' xs={24} md={14}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus veritatis laborum ab iste incidunt cum maxime perspiciatis eveniet reiciendis quis, eius quos inventore eaque consequatur ad ut at id officia.
          </Col>
        </Row>
      </div>
      <hr />
      <div className="footer-below-block">
        <h1>Copyright © 2025 <p className='footer-below-block-decoration'>HOANGDUONG.VN. Powered by HOANGDUONG.VN</p></h1>
      </div>
    </>

  )
}
