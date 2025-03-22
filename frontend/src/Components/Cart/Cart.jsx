import React from 'react'
import './Cart.scss'
import Button from '../common/Button/Button'
import Tag from '../common/Tag/Tag'

export default function Cart({show}) {
  return (
    <div style={{ display: `${show ? 'block' : 'none'}` }} className='cart-block'>
      <div className="button-block btn-cart">
        <Tag
          content="Giỏ hàng"
          height={40}
          width={380}
        />
      </div>
      <div className="cart-item-container">

      </div>
      <hr />
      <div className="total-bill">
        <span className='total-bill-content total-bill-title'>TỔNG TIỀN:</span>
        <span className='total-bill-content total-bill-price'>16,550,000đ</span>
      </div>
      <div className="button-block ">
        <Button
          content="THANH TOÁN"
          width={380}
          height={45}
          buttonType="primary"
        />
      </div>

    </div>
  )
}
