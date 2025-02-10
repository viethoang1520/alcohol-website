import React from 'react'
import './Header.scss'
import { Breadcrumb, Col, Row } from 'antd'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Header() {
  const handleCart = async () => {
    const res = await axios.get('http://localhost:3000/cart', { withCredentials: true })
      .then(res => {
        // console.log(res)
      })
      .catch(err => {
        // console.log(err)
      })
  }
  return (
    <div className='header'>
      <Row className='container header-block'>
        <Col className='logo' xs={4}>
          <h1>HOÀNG DƯƠNG.</h1>
        </Col>
        <Col className='middle-block' xs={10}>
          <ul className='header-content-list'>
            <Link className='header-item'>
              <p>TRANG CHỦ</p>
            </Link>
            <Link className='header-item'>
              <p>GIỚI THIỆU</p>

              <Icon className='arrow-down' icon="iconamoon:arrow-down-2-thin" />
            </Link>
            <Link className='header-item'>
              <p>RƯỢU THƯỜNG</p>

              <Icon className='arrow-down' icon="iconamoon:arrow-down-2-thin" />
            </Link>
            <Link className='header-item'>
              <p>RƯỢU MẠNH</p>

              <Icon className='arrow-down' icon="iconamoon:arrow-down-2-thin" />
            </Link>
            <Link className='header-item'>
              <p>QUÀ TẶNG</p>
              <Icon className='arrow-down' icon="iconamoon:arrow-down-2-thin" />
            </Link>
          </ul>
        </Col>
        <Col className='right-block' xs={10}>
          <Link to={'https://zalo.me/0367862734'} target='_blank' className="zalo-contact">
            <Icon className='header-phone-icon' icon="carbon:phone-voice" />
            <div className="contact-block">
              <p className='contact-text'>LIÊN HỆ ZALO</p>
              <p className='phone-number'>0367.862.734</p>
            </div>
          </Link>
          {/* icon block */}
          <ul className='icon-block'>
            <li>
              <div className="icon-wrapper">
                <Icon className='right-icon' icon="carbon:search" />
              </div>
            </li>
            <li>
              <div className="icon-wrapper">
                <Icon className='right-icon' icon="cil:user" />
              </div>
            </li>
            <li>
              <div className="icon-wrapper">
                <Icon className='right-icon' icon="mdi-light:heart" />
              </div>
            </li>
            <li>
              <div className="icon-wrapper">
                <Icon onClick={handleCart} className='right-icon' icon="proicons:cart" />
              </div>
            </li>
          </ul>

          {/* ORDER BUTTON */}
          <Link>
            <div className="order-button">ĐẶT RƯỢU NGON NHÉ!</div>
          </Link>
        </Col>
      </Row >
    </div >
  )
}
