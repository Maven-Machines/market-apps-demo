import Head from "next/head";
import Link from "next/link";
import commonStyles from "../styles/Common.module.scss";
import Script from "next/script";

export default function Layout({ hasLoadedData, children }) {
  let content;
  if (hasLoadedData) {
    content = children;
  } else {
    content = (
      <div className={commonStyles.loaderContainer}>
        <div className={commonStyles.loader} />
      </div>
    );
  }

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
      <Script
        src="https://sdk.mavenmachines.com/marketapps.sdk.0.1.0.min.js"
        strategy="beforeInteractive"
      />
      {content}
    </div>
  );
}
