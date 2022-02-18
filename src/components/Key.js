import React from 'react'

const Key = ({item, onPress}) => {
    
  return (
    <div 
        className='key'
        onClick={() => onPress(item)}
    >{item.text}</div>
  )
}

export default Key