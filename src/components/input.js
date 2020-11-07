import React from 'react'

function Input( props ) {
  const { label, placeholder, children } = props
  console.log(props)
  return (
    <div className="">
      <label className="block mb-2">{label}</label>
      <input className="py-2 px-2 w-full bg-transparent border rounded" placeholder={placeholder} />
      <p>{children}</p>
    </div>
  )
}

export default Input
