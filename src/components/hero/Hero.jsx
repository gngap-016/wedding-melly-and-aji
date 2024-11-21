"use client"
import React, { useEffect } from 'react'
import styles from './hero.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Button from '../button/Button'

const Hero = () => {
  const countDownDate = new Date("Nov 29, 2024 09:00:00").
  
  getTime();

  useEffect(() => {
    const countDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timeElement = document.getElementById('time');
      timeElement.innerHTML = (days < 10 ? "0" + days : days) + " : " + (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);

      if(distance < 0) {
        clearInterval(countDown)
        timeElement.innerHTML = "Acara Telah Selesai!"
      } 
    }, 1000)
  });

  return (
    <AnimatePresence>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: .05, duration: 1, type: 'spring'}}
        className={styles.imgContainer}>
          <Image src={'/images/couple-1.jpg'} alt='' className={styles.heroImg} fill />
        </motion.div>
        <div className={styles.name}>
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .15, duration: .5, type: 'spring'}}
            className={`${styles.man} gold`}
          >Melly Angreini</motion.p>
          <motion.p 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .3, duration: .5, type: 'spring'}}
            className={`${styles.and} gold`}
          >&</motion.p>
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .5, duration: .5, type: 'spring'}}
            className={`${styles.woman} gold`}
          >M. Aji Ramadhan</motion.p>
        </div>

        <div className={styles.descContainer}>
          <p className={styles.desc}>Akan melangsungkan resepsi pernikahan pada:</p>
          <motion.p
            initial={{opacity: 0, scale: .5}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: .75, duration: .25, type: 'spring'}}
            className={`${styles.date} gold`}
          >Jumat, 29 November 2024</motion.p>
        </div>
        <div className={styles.countDown}>
          <p className={styles.desc}>Waktu menuju acara:</p>
          <motion.p
            initial={{opacity: 0, scale: .5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              delay: 1,
              duration: .5,
              ease: [0, .71, .2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: .001
              },
            }}
            className={`${styles.time} gold`} id='time'>00 : 00 : 00 : 00</motion.p>
        </div>
        <div className={styles.buttonContainer}>
          <Button />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Hero
