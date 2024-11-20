"use client"
import React from 'react'
import styles from './gift.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

const copyNumber = (number) => {
  navigator.clipboard.writeText(number)
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Disalin : " + number;
}

const mouseOut = () => {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Salin Nomor";
}
const Gift = () => {
  return (
    <div className={styles.container}>
      <motion.h1 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.title}
      >Kirim Kado</motion.h1>
      <p className={styles.desc}>Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
      <div className={styles.giftContainer}>
        <motion.div 
          initial={{opacity: 0, y: -15}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: .25, duration: .5, type: 'spring'}}
          className={styles.giftItem}
        >
          <div className={styles.imgContainer}>
            <Image src={'/images/dana.png'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.descContainer}>
            <div className={styles.tooltip}>
              <button className={styles.number} onClick={() => copyNumber("085366203580")} onMouseOut={mouseOut}>
                <span className={styles.tooltipText} id='myTooltip'>Salin Nomor</span>
                <span className={styles.noRek}>No. <br /></span>
                0853 6620 3580
              </button>
            </div>
            <p className={styles.name}>a.n Melly Angreini</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Gift