import React from 'react'
import Logo from '../Logo'
import SocialLinks from '../SocialLinks'
import s from './style.module.css'

export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.box}>
            <Logo/>
            <SocialLinks/>
        </div>
        <div className={s.box}>
            <h4>Explore</h4>
            <p><i class="las la-ellipsis-h"></i> Home</p>
            <p><i class="las la-ellipsis-h"></i> About</p>
            <p><i class="las la-ellipsis-h"></i> Articles</p>
            <p><i class="las la-ellipsis-h"></i> Our Store</p>
            <p><i class="las la-ellipsis-h"></i> Contact Us</p>
        </div>
        <div className={s.box}>
            <h4>Utility Pages</h4>
            <p><i class="las la-ellipsis-h"></i> Style Guide</p>
            <p><i class="las la-ellipsis-h"></i> 404 Not Found</p>
            <p><i class="las la-ellipsis-h"></i> Password Protected</p>
            <p><i class="las la-ellipsis-h"></i> Licenses</p>
            <p><i class="las la-ellipsis-h"></i> Changelog</p>
        </div>
        <div className={s.box}>
            <h4>Keep in Touch</h4>
            <p><b> Address : </b> 24A Kingston St. Las Vegas NC 28202, USA</p>
            <p><b> Mail : </b> support@pages.com</p>
            
            <p><b> Phone : </b> (+22) 123 - 4567 - 900</p>
        </div>
    </div>
  )
}
