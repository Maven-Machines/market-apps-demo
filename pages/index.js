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
		<a href="https://goo.gl/maps/Ez6FuYbPg24sjDDx7">URL to Google</a>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.6496982439564!2d-79.95507948009957!3d40.46362292252673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff43c6cc8d1c972b!2zNDDCsDI3JzQ5LjYiTiA3OcKwNTcnMTMuOCJX!5e1!3m2!1sen!2sus!4v1675272625497!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
