import React from 'react'
import Book from '../Book'
import book1 from './book1.png'
import book2 from './book2.png'
import s from './style.module.css'

export default function AuthorsBooks() {
    const books = [
        {id:1, img:book1, name:"Atomic One's", price:13.84, description: 'As the book contains theoretical content as well as solved questions.', printed:'Printed Book'},
        {id:2, img:book2, name:"The Dark Light", price:86.11, description: 'As the book contains theoretical content as well as solved questions.', printed:'Printed Book'}
    ]
  return (
    <div className={s.wrapp}>
        <h2>The Author's Book</h2>
        <i class="las la-minus"></i>
        <div className={s.container}>
            {
                books.map((book) => <Book key={book.id} {...book}/>)
            }
        </div>
        
    </div>
  )
}
