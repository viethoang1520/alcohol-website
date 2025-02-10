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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab ratione placeat laudantium. Distinctio neque deserunt corporis doloribus vel dolor, tempore natus quo rem perferendis nostrum ipsam corrupti atque necessitatibus!
          </Col>
          <Col xs={24} md={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis suscipit dolorum. Eligendi repellat reiciendis quae deserunt obcaecati aut, delectus temporibus voluptatem ea architecto sit laborum odit? Iure, cumque. Ratione.</Col>
        </Row>
      </div>
    </>

  )
}
