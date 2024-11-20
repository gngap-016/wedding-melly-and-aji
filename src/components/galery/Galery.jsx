"use client"
import React from 'react'
import styles from './galery.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  {
    id: 1,
    url: "/images/couple-1.jpg",
    alt: "Galeri 1"
  },
  {
    id: 2,
    url: "/images/couple-2.jpg",
    alt: "Galeri 2"
  },
]

const Galery = () => {
  return (
    <div className={styles.container}>
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.title}
      >Galeri</motion.h1>
      <div className={styles.galeryContainer}>
        {
          images.map((item) => (
            <motion.div
            key={item.id}
            initial={{opacity: 0, x: (item.id % 2 === 0 ? '100%' : '-100%')}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: .5, duration: .5, type: 'spring'}}
            className={styles.imgContainer}
            >
              <Image src={item.url} alt={item.alt} className={styles.img} fill />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Galery