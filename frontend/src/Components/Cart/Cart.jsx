import React from 'react'
import './Cart.scss'
import PrimaryButton from '../common/PrimaryButton/PrimaryButton'

export default function Cart() {
  return (
    <div className='cart-block'>
      <div className="button-block btn-cart">
        <PrimaryButton
          content="Giỏ hàng"
          height={40}
          width={380}
          buttonType="secondary"
        />
      </div>
      <div className="button-block ">
        <PrimaryButton
          content="THANH TOÁN"
          width={380}
          height={45}
          buttonType="primary"
        />
      </div>

    </div>
  )
}
