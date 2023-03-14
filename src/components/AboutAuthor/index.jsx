import React from 'react'
import photo from './Frame.png'
import s from './style.module.css'
import line from './Rectangle.png'

export default function AboutAuthor() {
  return (
    <div className={s.wrapp}>
        <div>
            <img src={photo} alt="photo" />
        </div>
        <div className={s.body}>
            <h2>About The Author</h2>
            <i class="las la-minus"></i>
            <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
            <div className={s.reiting}>
                <div>
                    <h2>02</h2>
                    <p>Books Published</p>
                </div>
                <img src={line} alt="line" />
                <div>
                    <h2>4.5</h2>
                    <p>User Reviews</p>
                </div>
                <img src={line} alt="line" />
                <div>
                    <h2>04</h2>
                    <p>Best Seller Awards</p>
                </div>
            </div>
        </div>
    </div>
  )
}
