import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Camera.module.scss'
import commonStyles from "../styles/Common.module.scss"

export default function Camera() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  function handleFileSelected(event) {
		setSelectedFile(event.target.files[0]);
  }

  return (
    <main className={styles.main}>
      <div className={commonStyles.pageTitle}>
        Camera Demo
      </div>
      <div className={styles.uploadContainer}>
        <label htmlFor="cameraFileInput">
          <span className={commonStyles.actionButton}>Take Picture</span>
          <input
            id={"cameraFileInput"}
            className={styles.cameraInput}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelected}
          />
        </label>
      </div>
      {selectedFile && 
        <div className={styles.previewContainer}>
          <picture>
            <source srcSet={preview} />
            <img src={preview} alt="Image Preview" />
          </picture>
        </div>
      }
    </main>
  )
}
