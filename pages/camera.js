import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Camera.module.scss";
import commonStyles from "../styles/Common.module.scss";

export default function Camera() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  function handleFileSelected(event) {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>Camera Demo</title>
      </Head>
      <div className={commonStyles.pageTitle}>Camera Demo</div>
      <div className={styles.uploadContainer}>
        <label htmlFor="imageFileInput">
          <span className={commonStyles.actionButton}>Take Picture</span>
          <input
            id={"imageFileInput"}
            className={styles.cameraInput}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelected}
          />
        </label>
        <div className={styles.spacer} />
        <label htmlFor="scanFileInput">
          <span className={commonStyles.actionButton}>Take Document Scan</span>
          <input
            id={"scanFileInput"}
            className={styles.cameraInput}
            type="file"
            accept="image/*, .mavenScan"
            capture="environment"
            onChange={handleFileSelected}
          />
        </label>
      </div>
      {selectedFile && (
        <div className={styles.previewContainer}>
          <picture>
            <source srcSet={preview} />
            <img src={preview} alt="Image Preview" />
          </picture>
        </div>
      )}
    </main>
  );
}
