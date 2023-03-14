import React from 'react'

export default function ResItem({img,title,descr,date}) {
  return (
    <div>
        <img src={img} alt="img" />
        <h4>{title}</h4>
        <p>{descr}</p>
        <p>{date}</p>
    </div>
  )
}
