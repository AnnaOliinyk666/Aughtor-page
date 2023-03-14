import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../Logo';
import OrderButton from '../OrderButton';
import SocialLinks from '../SocialLinks';
import s from './style.module.css'

export default function Nav() {
    const checkClass = ({isActive}) => isActive? s.active:'';
    const links = [
        {id: 1, label: 'home',to:'/'},
        {id: 2, label: 'aughtor',to:'/aughtor'},
        {id: 3, label: 'companies',to:'/companies'},
        {id: 4, label: 'articles',to:'/articles'}
    ]
  return (
    <div>
        <nav className={s.nav}>
            <div className={s.container}>
            <Logo/>
            <SocialLinks/>
            
            </div>
            
            {
                links.map(({id,label,to}) => <NavLink className={checkClass} key={id} to={to}>{label}</NavLink>)
            }
            
            <OrderButton/>
            
            
        </nav>
    </div>
  )
}