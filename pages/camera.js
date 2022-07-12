import Head from 'next/head'
import Image from 'next/image'
import commonStyles from "../styles/Common.module.scss"
import styles from '../styles/Home.module.scss'

export default function Camera() {
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
        Canera
      </main>
    </div>
  )
}
