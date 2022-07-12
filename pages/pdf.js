import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import commonStyles from "../styles/Common.module.scss"
import styles from '../styles/Pdf.module.scss'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const SAMPLE_PDF_URL = "/sample_pay_stub.pdf";

export default function PDF() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className={commonStyles.appContainer}>
      <Head>
        <title>PDF Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={commonStyles.appHeader}>
       <Link href="/"><a>Market Apps Demo</a></Link>
      </div>

      <main className={styles.main}>
        <div className={styles.pdfTitle}>
          PDF Demo
        </div>
        <div className={styles.pdfContainer}>
          <Document file={SAMPLE_PDF_URL}>
            <Page pageNumber={pageNumber} className={styles.pdfPage} width={1200} />
          </Document>
        </div>
        <div className={styles.pdfDescription}>
          Rendered using react-pdf
        </div>
      </main>
    </div>
  )
}
