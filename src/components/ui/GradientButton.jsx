import React from 'react'

const GradientButton = ({children , onClick}) => {
  return (
    <button className='gradient-btn ' onClick={onClick}>
        {children}
    </button>
  )
}

export default GradientButton