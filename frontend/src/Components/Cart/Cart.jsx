import React from 'react'
import './Cart.scss'
import Button from '../common/Button/Button'

export default function Cart() {
  return (
    <div className='cart-block'>
      <div className="button-block">
        <Button
          content="THANH TOÁN"
          width={540}
          height={45}
          textColor="#fff"
          backgroundColor="red"
        />
      </div>
    </div>
  )
}
