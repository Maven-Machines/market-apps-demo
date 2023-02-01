import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home({ driver, deviceLocation }) {
  let driverContent = null;
  if (driver) {
    driverContent = (
      <div className={styles.heroContainer}>
        <h1>Hi {driver.firstName}!</h1>
        <p>Tap the cards below to launch a demo</p>
		<p>{JSON.stringify(deviceLocation)}</p>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {driverContent}
      <div className={styles.grid}>
        <Link href="/camera">
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
  );
}
