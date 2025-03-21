import React from 'react'
import './Cart.scss'
import Button from '../common/Button/Button'

export default function Cart() {
  return (
    <div className='cart-block'>
      <div className="button-block">
        <Button
          content="THANH TOÁN"
          width={420}
          height={45}
          textColor="#fff"
          backgroundColor="red"
        />
      </div>
      <div className="second-block">
        <Button
          content="Giỏ hàng"
          height={40}
          width={420}
          textColor="#3b3b3c"
          backgroundColor="#f3f5f6"
          borderRadius={3}
        />
      </div>
    </div>
  )
}
