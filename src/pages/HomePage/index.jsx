import React from 'react'
import OrderButton from '../../components/OrderButton'
import bookImg from './book1.png'
import s from './style.module.css'

export default function HomePage() {
  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.infoContainer}>
          <h4><i class="las la-minus"></i> Wellcome To Pages!!!</h4>
          <h1>Your Books From The Best Writer.</h1>
          <div>
            <p>We believe that reading books are essential to a healthy culture.</p>
            <p>They’re where authors can connect with readers.</p>
          </div>
          
        </div>
        
        <div className={s.orderContainer}>
              <OrderButton/>
              <p className={s.btn}>Read Free Demo</p>
        </div>
        <div className={s.orderContainer}>
            <div>
              <p className={s.relevant}><i class="lar la-circle"></i> Pages</p>
              <p className={s.relevantNote}>250pages</p>
            </div>
            <div>
              <p className={s.relevant}><i class="lar la-circle"></i> Lenght</p>
              <p className={s.relevantNote}>10 Hours</p>
            </div>
            <div>
              <p className={s.relevant}><i class="lar la-circle"></i> Rating</p>
              <p className={s.relevantNote}>4.5/5 (305 ratings)</p>
            </div>
        </div>
        
      </div>
    
      <img className={s.img} src={bookImg} alt="book" />
    </div>
  )
}
