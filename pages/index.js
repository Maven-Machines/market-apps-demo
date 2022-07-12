import Head from 'next/head'
import Image from 'next/image'
import commonStyles from "../styles/Common.module.scss"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={commonStyles.appContainer}>
      <Head>
        <title>Market Apps Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={commonStyles.appHeader}>
       <a href="/">Market Apps Demo</a>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
        <a href="/camera" className={styles.card}>
          <h2>Camera Demo &rarr;</h2>
          <p>Take pictures and document scans</p>
        </a>
        <a href="/pdf" className={styles.card}>
          <h2>PDF Demo &rarr;</h2>
          <p>Load PDFs inside of your app</p>
        </a>
        </div>
      </main>
    </div>
  )
}