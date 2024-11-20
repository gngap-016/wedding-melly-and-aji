import React from 'react'
import styles from './quotes.module.scss'

const Quotes = () => {
  return (
    <div className={styles.container}>
      <p className={styles.desc}>{`"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."`}</p>
      <p className={styles.subDesc}>{"(QS. Ar-Rum 30:21)"}</p>
    </div>
  )
}

export default Quotes