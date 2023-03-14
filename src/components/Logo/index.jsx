import React from 'react'
import logo from './Logo.png'
import s from './style.module.css'

export default function Logo() {
  return (
    <img className={s.logo} src={logo} alt="logo"/>
  )
}
