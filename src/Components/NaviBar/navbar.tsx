import React from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'


function NaviBar() {
  return (
    <>
    <nav>
    <a href=''><Image src="/assets/Image/Logo.jpg" alt="Logo"
        width={50} height={50}  style={styles.img}/></a>

    <ul>
        <li><a href='#top'>Home</a></li>
        <li><a href='#aboutme'>About Me</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
    </nav>
    </>
  )
}

export default NaviBar