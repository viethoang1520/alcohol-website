import React from 'react'
import './Tag.scss'
export default function Tag({ content, width, height }) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
      className="tag-container"
    >
      <span className='tag-content'>{ content }</span>
    </div>
  )
}
