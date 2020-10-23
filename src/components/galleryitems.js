import React from 'react'

function Galleryitems(props) {
  const { img, leadingText, explain} = props
  return (
    <div className="mx-auto">
      <img src={img}  className="rounded" alt={explain}/>
      <h3 className="text-2xl font-medium mt-2">{leadingText}</h3>
      <p>{explain}</p>
    </div>
  )
}

export default Galleryitems
