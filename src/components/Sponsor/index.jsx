import React from 'react'

export default function Sponsor({img,name,descr}) {
  return (
    <div>
        <img src={img} alt="img" />
        <h4>{name}</h4>
        <p>{descr}</p>
    </div>
  )
}
