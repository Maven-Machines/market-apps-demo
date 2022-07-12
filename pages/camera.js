import Head from 'next/head'
import Link from 'next/link'
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
       <Link href="/"><a>Market Apps Demo</a></Link>
      </div>

      <main className={styles.main}>
        Canera
      </main>
    </div>
  )
}
