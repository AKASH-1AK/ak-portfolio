import React from 'react'

const Button = ({children}) => {
  return (
    <button className={`btn max-w-[200px]`}>
      {children}
    </button>
  )
}

export default Button
