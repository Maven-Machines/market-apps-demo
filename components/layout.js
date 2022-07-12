import Head from 'next/head'
import Link from 'next/link'
import commonStyles from "../styles/Common.module.scss"

export default function Layout({ children }) {
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

     { children }
    </div>
  )
}
