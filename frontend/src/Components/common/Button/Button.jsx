import React from 'react'
import './Button.scss'  
export default function Button({content, width, height, textColor, backgroundColor, borderRadius, border, onClick}) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: backgroundColor,
      borderRadius: `${borderRadius}px`,
      border: border,
    }}
      onClick={onClick}
      className='button-container'>
      <span style={{color: textColor}} className='button-content'>{ content }</span>
    </div>
  )
}
