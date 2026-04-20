import React from 'react'

const FloatingShape = ({type , color}) => {
  return (
    <div
    className= {`shape ${type}`}
    style  = {{background : color}}
    ></div>
  )
}

export default FloatingShape