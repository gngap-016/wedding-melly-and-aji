"use client"
import React from 'react'
import styles from './waves.module.scss'
import { motion } from 'framer-motion'

const Waves = () => {
  return (
      <div className={styles.wavesContainer}>
        <div className={styles.topWavesContainer}>
          <motion.div 
            initial={{ x: 0, y: 0 }}
            animate={{ x: -2, y: -2 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: .2 }}
          className={styles.topWaves2}></motion.div>
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: -2, y: -2 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1, delay: .2 }}
          className={styles.topWaves1}></motion.div>
        </div>
        <div className={styles.bottomWavesContainer}>
          <motion.div 
            initial={{ x: 0, y: 0 }}
            animate={{ x: 2, y: -2 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: .2 }}
          className={styles.awan1}></motion.div>
          <motion.div 
            initial={{ x: 0, y: 0 }}
            animate={{ x: -2, y: 2 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: .2 }}
          className={styles.awan2}></motion.div>

          <motion.div 
              initial={{ x: 0, y: 0 }}
              animate={{ x: 2, y: 2 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: .2 }}
            className={styles.bottomWaves2}></motion.div>

          <motion.div 
            initial={{ x: 0, y: 0 }}
            animate={{ x: 2, y: 2 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: .2 }}
          className={styles.wayang}></motion.div>

          <motion.div
            initial={{ x: -4, y: 2 }}
            animate={{ x: -10, y: 5 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1, delay: .2 }}
          className={styles.bottomWaves1}></motion.div>
        </div>
      </div>
  )
}

export default Waves