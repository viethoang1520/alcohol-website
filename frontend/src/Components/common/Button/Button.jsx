import React from 'react'
import './Button.scss'  
export default function Button({ content, width, height, onClick, buttonType }) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
      onClick={onClick}
      className={`button-container ${buttonType}`}
    >
      <span className='button-content'>{ content }</span>
    </div>
  )
}
