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
      >Rabu, 7 Agustus 2024</motion.p>
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
      >Di Mendati Kencana Sp 4, Pekon Mon, Ngambur, Pesisir Barat, Lampung</motion.p>
      <motion.div 
        initial={{opacity: 0, scale: .5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}} 
        className={styles.maps}
      >
        <Link href={'https://maps.app.goo.gl/HqknMdGh92JuyRWZ7'} className={styles.link} target='_blank' rel='noreferrer'>https://maps.app.goo.gl/CA9WJWLdtqUahgkU6</Link>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39346.87810659094!2d104.14198846276847!3d-5.428424377912727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e47af1becb4bd3b%3A0x26b22a586d7d64f0!2sPekon%20Mon%2C%20Kec.%20Ngambur%2C%20Kabupaten%20Pesisir%20Barat%2C%20Lampung!5e1!3m2!1sid!2sid!4v1722224606855!5m2!1sid!2sid" width={'100%'} height={400} style={{border:0, marginTop: 16}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.googleMaps}></iframe>
      </motion.div>
    </div>
  )
}

export default EventComponent 