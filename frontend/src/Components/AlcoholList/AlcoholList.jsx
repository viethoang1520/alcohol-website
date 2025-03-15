import React from 'react'
import './AlcoholList.scss'
import { Col, Row, Card, Pagination } from 'antd'
import alcoholList from '../../data/alcoholList'
import AlcoholCard from '../AlcoholCard/AlcoholCard';
export default function AlcoholList({ category, description }) {
  return (
    <div className='container alcohol-list'>
      <h1 className='alcohol-category'>RƯỢU TRẮNG</h1>
      <p className="category-description">Rượu Trắng ngày nay dần trở thành thứ thức uống không thể thiếu trong những bữa tiệc quan trọng. Vì những tác dụng tốt với sức khỏe của loại rượu này nên hiện rất được ưu chuộng. Rượu Vang là loại thức uống có cồn được lên men hoàn toàn tự nhiên từ quả nho. Với mỗi loại nho và cách ngâm ủ kĩ thuật khác nhau mà cho ra những loại rượu vang có hương vị và màu sắc khác nhau. Có thể chia ra làm nhiều loại rượu vang khác nhau như : Rượu Vang Ý, Rượu Vang Chi lê, Rượu Vang Pháp, Rượu Vang Tây ban nha, Rượu Vang úc, Rượu Vang Mỹ, Rượu Vang Đỏ, Rượu Vang Trắng, Rượu Vang Hồng, Rượu Vang Ngọt, Rượu Vang Chát, Rượu Champagne, Rượu Vang Sủi, Rượu Vang Đà Lạt…</p>
      <Row gutter={[25, 20]} justify="center">
        {alcoholList.map((alcohol) => (
          <Col className='item-block' key={alcohol.id} xs={12} md={6} lg={6} >
            <AlcoholCard
              alcohol={alcohol}
            />
          </Col>
        ))}
      </Row>
      <br />
      <Pagination className='alcohol-list-pagination' align="center" defaultCurrent={1} total={50} />
      <br />
    </div>
  )
}
