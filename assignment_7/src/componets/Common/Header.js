import '../../styles/header.css'
import React from 'react'

export default function Header() {
  return (
    <div className="header">
    <div className="logo">
        <span>e!</span>
    </div>
    <input type="button" value="Create an account" id="createac" className="btnc"/>
    <input type="button" value="Login" id="login" className="btnl"/>
</div>
  )
}
