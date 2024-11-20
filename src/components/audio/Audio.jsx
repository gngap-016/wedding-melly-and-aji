"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from './audio.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Audio = () => {
  const [play, setPlay] = useState(true);

  const playAudio = useCallback(() => {
    const song = document.querySelector('#audio');

    if(play) {
      song.volume = .6;
      song.play();
    } else {
      song.pause();
    }
  }, [play]);

  const onScroll = useCallback(() => {
    const audioWrapper = document.getElementById('audioWrapper');
    const { scrollY } = window;
    scrollY > 40 ? audioWrapper.classList.add(`${styles.active}`) : audioWrapper.classList.remove(`${styles.active}`)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    playAudio();
  }, [playAudio, onScroll])

  return (
    <div id='audioWrapper' className={styles.container}>
      <audio loop id='audio'>
        <source src={'/music/sound.mp3'} type='audio/mp3' />
      </audio>

      <motion.div
        animate={{rotate:360}}
        transition={{repeat: Infinity, duration: 5}}
        className={styles.audioIconWrapper} onClick={() => setPlay(!play)}
      >
        {play 
          ? <FontAwesomeIcon icon={faCirclePause} className={`${styles.btnAudio}`} size='2x' />
          : <FontAwesomeIcon icon={faCirclePlay} className={`${styles.btnAudio}`} size='2x' />
        }
      </motion.div>
    </div>
  )
}

export default Audio