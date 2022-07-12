import Head from 'next/head'
import Link from 'next/link'
import commonStyles from "../styles/Common.module.scss"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={commonStyles.appContainer}>
      <Head>
        <title>Market Apps Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className={commonStyles.appHeader}>
       <Link href="/">Market Apps Demo</Link>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/camera" >
            <a className={styles.card}>
              <h2>Camera Demo &rarr;</h2>
              <p>Take pictures and document scans</p>
            </a>
          </Link>
          <Link href="/pdf" className={styles.card}>
            <a className={styles.card}>
              <h2>PDF Demo &rarr;</h2>
              <p>Load PDFs inside of your app</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
