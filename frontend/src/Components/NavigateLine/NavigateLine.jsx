import React from 'react'
import { Breadcrumb } from 'antd';
import './NavigateLine.scss'
import { Link } from 'react-router-dom';
export default function NavigateLine() {
  return (
    <div className="navigate-line">
      <Breadcrumb
        className='container'
        items={[
          {
            title: 'Trang chủ',
          },
          {
            title: <Link href="">Danh mục</Link>,
          },
          {
            title: <Link href="">RƯỢU TRẮNG</Link>,
          },
        ]}
      />
    </div>

  )
}
