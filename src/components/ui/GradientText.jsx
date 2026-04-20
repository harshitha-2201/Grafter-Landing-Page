import React from 'react'

const GradientText = ({children , variant = "default" }) => {
  return (
    <span className={`gradient-text ${variant}`}>
        {children}
    </span>
  )
}

export default GradientText