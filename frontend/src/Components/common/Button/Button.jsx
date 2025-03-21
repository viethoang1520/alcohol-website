import React from 'react'
import './Button.scss'  
export default function Button({content, width, height, textColor, backgroundColor}) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: backgroundColor,
    }}
      className='button-container' >
      <span style={{color: textColor}} className='button-content'>{ content }</span>
    </div>
  )
}
