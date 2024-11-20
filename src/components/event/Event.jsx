"use client"
import React from 'react'
import styles from './event.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

const EventComponent = () => {
  return (
    <div id='acara' className={styles.container}>
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.title}
      >Acara Pernikahan</motion.h1>
      <p className={styles.desc}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaAllah kami akan menyelenggarakan acara pada:</p>
      <motion.p
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={`${styles.date} gold`}
      >Jumat, 29 November 2024</motion.p>
      <motion.h2 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={`${styles.subtitle} gold`}
      >Akad</motion.h2>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.time}
      >Pukul 09.00 WIB - Selesai</motion.p>
      <motion.h2 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={`${styles.subtitle} gold`}
      >Resepsi</motion.h2>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.time}
      >Pukul 13.00 WIB - Selesai</motion.p>
      <motion.p
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.location}
      >Di Gedung Surian, Lampung Barat, Lampung</motion.p>
      <motion.div 
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.maps}
      >
        <Link href={'https://maps.app.goo.gl/pTQbeydovTzz2YJr8'} className={styles.link} target='_blank' rel='noreferrer'>https://maps.app.goo.gl/pTQbeydovTzz2YJr8</Link>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2289.915910064477!2d104.46787882228051!3d-5.092691756199731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDUnMzQuMCJTIDEwNMKwMjgnMDYuOSJF!5e1!3m2!1sen!2sid!4v1732111795465!5m2!1sen!2sid" width={'100%'} height={400} style={{border:0, marginTop: 16}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.googleMaps}></iframe>
      </motion.div>
    </div>
  )
}

export default EventComponent 