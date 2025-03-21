import React from 'react'
import './PrimaryButton.scss'  
export default function PrimaryButton({ content, width, height, onClick, buttonType }) {
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
