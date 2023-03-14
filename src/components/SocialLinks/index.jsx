import React from 'react'
import faceImg from './faceb.png'
import linkImg from './link.png'
import twitImg from './twit.png'
import s from './style.module.css'

export default function SocialLinks() {
    
  return (
    <div className={s.wrapper}>
        
        
                {/* <img className={s.link}  src={faceImg} alt='FE'/> */}
                <div className={s.link}><i class="lab la-facebook-f"></i></div>
                {/* <img className={s.link}  src={linkImg} alt='LI'/> */}
                <div className={s.link}><i class="lab la-linkedin-in"></i></div>
                {/* <img className={s.link}  src={twitImg} alt='TW'/> */}
                <div className={s.link}><i  class="lab la-twitter"></i></div>
                <div className={s.link}><i class="lab la-instagram"></i></div>
           
    </div>
  )
}
