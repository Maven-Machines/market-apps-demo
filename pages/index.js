import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
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
  )
}
