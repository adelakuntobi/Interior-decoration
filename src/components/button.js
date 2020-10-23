import React from 'react'

function Button({ theText }) {
  return (
    // eslint-disable-next-line 
    < a href="#" target="_blank"
      className="outline-none text-primary bg-primary w-48 flex items-center justify-center h-12 rounded-md">
      <button className="capitalize">
        {theText}
      </button>
    </a >
  )
}

export default Button
