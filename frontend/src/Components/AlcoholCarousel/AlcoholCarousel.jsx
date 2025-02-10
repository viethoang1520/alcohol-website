import React from 'react'
import { Carousel } from 'antd';
import './AlcoholCarousel.scss'
export default function AlcoholCarousel() {
  const contentStyle = {
    margin: 0,
    width: '100%',
    height: '470px',
    color: '#fff',
    lineHeight: '470px',
    textAlign: 'center',
    background: '#364d79',  
    backgroundImage: 'url(https://zinniahealth.com/_next/image?url=https%3A%2F%2Fcdn.zinniahealth.com%2Fwp-content%2Fuploads%2F20221026132959%2FiStock-475273684-scaled.jpg&w=3840&q=75)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'scale-down',
    // backgroundRepeat: 'no-repeat',
    // height: '100%', // Adjust height as needed 
  };
  return (
    <div>
      <Carousel className='carousel-block' draggable autoplay autoplaySpeed={5000} arrows infinite={false} >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

    </div>
  )
}
