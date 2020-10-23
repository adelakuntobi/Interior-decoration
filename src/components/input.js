import React from 'react'

function Input( { label, placeholder } ) {
  return (
    <div className="w-full lg:w-6/12">
      <label className="block mb-2">{label}</label>
      <input className="p-3 w-full bg-transparent border rounded" placeholder={placeholder} />
    </div>
  )
}

export default Input
