import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Eventos from '../components/Eventos'
import Footer from '../components/Footer'
import Local from '../components/Local'
import Rollimgs from '../components/Rollimgs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Rollimgs/>
      <div className={styles.eventoArea}>
        <h2>EVENTOS</h2>
        <Eventos />
      </div>
        <div className={styles.bar}></div>
        <Local />
    </div>
  )
}

export default Home
