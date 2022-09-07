import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Eventos from '../components/Eventos'
import Rollimgs from '../components/Rollimgs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Rollimgs/>
      <div className={styles.eventoArea}>
        <h2>Eventos</h2>
        <Eventos />
      </div>
    </div>
  )
}

export default Home
