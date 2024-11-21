"use client"
import React from 'react'
import styles from './footer.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.desc}>{"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya, kami ucapkan terimakasih."}</p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .25, duration: .5, type: 'spring'}}
        className={styles.salam}
      >Wassalamualaikum Warahmatullahi Wabarakatuh</motion.p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.lastWord}
      >Hormat Kami,</motion.p>
      <motion.p 
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .75, duration: .5, type: 'spring'}}
        className={`${styles.personName} gold`}
      >Melly & Aji</motion.p>
      <motion.div 
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: .5, duration: .5, type: 'spring'}}
        className={styles.supported}
      >
        <hr />
        <span className={styles.textSupported}>supported by</span> <br /> <Link href={'https:///wa.me/6281991100788'} target='_blank' rel='noreferrer' className={styles.myLink}>Agsa FC Creative - CP. 0819 9110 0788</Link>
      </motion.div>
    </div>
  )
}

export default Footer
