import { useState } from 'react';
import styles from '../styles/Pdf.module.scss'
import commonStyles from "../styles/Common.module.scss"
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const SAMPLE_PDF_URL = "/sample_pay_stub.pdf";

export default function PDF() {
  const [pageNumber, setPageNumber] = useState(1);

  function renderLoadingPdf() {
    return (
      <div className={styles.loadingPdf}>
        Loading Document...
      </div>
    )
  }

  return (
    <main className={styles.main}>
      <div className={commonStyles.pageTitle}>
        PDF Demo
      </div>
      <div className={styles.pdfContainer}>
        <Document file={SAMPLE_PDF_URL} loading={renderLoadingPdf}>
          <Page pageNumber={pageNumber} width={1200} />
        </Document>
      </div>
      <div className={styles.pdfDescription}>
        Rendered using react-pdf
      </div>
    </main>
  )
}
