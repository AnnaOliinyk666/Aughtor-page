import React from 'react'
import s from './style.module.css'

export default function Book({img,name,price,description,printed}) {
  return (
    <div className={s.container}>
        <div>
            <img src={img} alt={name} />
        </div>
        <div>
            <h4>{name}</h4>
            <p>$ {price} USD</p>
            <p>{description}</p>
            <p><i class="las la-circle"></i> {printed}</p>
        </div>
    </div>
  )
}
