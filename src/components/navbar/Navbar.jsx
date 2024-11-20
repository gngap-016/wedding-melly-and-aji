"use client"
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
  const onScroll = useCallback(() => {
    const navbar = document.getElementById('bottomBar');
    const { scrollY } = window;

    scrollY > 40 ? navbar.classList.add(`${styles.active}`) : navbar.classList.remove(`${styles.active}`)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, [onScroll]);

  return (
    <div className={`${styles.container}`} id='bottomBar'>
      <Link href={'#home'}>Beranda</Link>
      <Link href={'#acara'}>Acara</Link>
      <Link href={'#kado'}>Kado</Link>
    </div>
  )
}

export default Navbar