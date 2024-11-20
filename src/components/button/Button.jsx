"use client"
import React, { useCallback, useEffect } from 'react'
import styles from './button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import { motion } from 'framer-motion'

const Button = () => {
  const disableScroll = useCallback(() => {
    const rootElement = document.querySelector(":root");
    window.onscroll = function () {
      window.scrollTo(0, 0);
    }
    rootElement.style.scrollBehavior = 'auto';
  }, [])
  
  const enableScroll = useCallback(() => {
    const rootElement = document.querySelector(":root");
    const playMusicElement = document.querySelector('#audio');

    playMusicElement.volume = .6;
    playMusicElement.play();

    rootElement.style.scrollBehavior = 'smooth';
    window.onscroll = function () {
      rootElement.style.scrollBehavior = 'smooth';
    }

    window.scrollTo(0, 400);
  }, [])

  const onScroll = useCallback(() => {
    const buttonOpen = document.getElementById('buttonOpen');
    const { scrollY } = window;
    scrollY > 200 ? buttonOpen.classList.add(`${styles.active}`) : buttonOpen.classList.remove(`${styles.active}`)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    disableScroll();
  }, [disableScroll, onScroll])
  
  return (
    <motion.div
      className={styles.container}

      initial={{opacity: .9, scale: .95}}
      animate={{opacity: 1,scale: 1.05}}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: .8,
        delay: 1,
      }}
    >
      <Link href='#' id='buttonOpen' className={styles.button} onClick={() => enableScroll()}>
        <FontAwesomeIcon icon={faEnvelopeOpen} width={16} /> Buka Undangan
      </Link>
    </motion.div>
  )
}

export default Button