import React from 'react'
import book from './CoffeBook.png'

export default function GetBook() {
  return (
    <div>
        <div>
            <h2>Get Book Copy Today!</h2>
            <i class="las la-minus"></i>
            <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
        </div>
        <img src={book} alt="book" />
    </div>
  )
}
