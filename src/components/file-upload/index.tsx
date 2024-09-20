"use client";

import React, { MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';

interface FileUploadProps {
  upload: MouseEventHandler<HTMLButtonElement>
}

const FileUpload = ({ upload }: FileUploadProps) => {
  const [file, setFile] = useState<string>();
  const [fileEnter, setFileEnter] = useState(false);

  const handleOnFileDrop = (e: any) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            let blobUrl = URL.createObjectURL(file);
            setFile(blobUrl);
          }
          console.log(`items file[${i}].name = ${file?.name}`);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  const handleOnFileChanged = (e: any) => {
    console.log(e.target.files);
    let files = e.target.files;
    if (files && files[0]) {
      let blobUrl = URL.createObjectURL(files[0]);
      setFile(blobUrl);
    }
  }

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
    setFileEnter(true);
  }

  const handleOnDragLeave = (e: any) => {
    setFileEnter(false);
  }

  const handleOnDragEnd = (e: any) => {
    e.preventDefault();
    setFileEnter(false);
  }

  function FileInput() {
    return <div className={styles.container}>
      <div className={`${fileEnter && styles.file_entered} ${styles.subcont}`}
        onDragOver={handleOnDragOver}
        onDragLeave={handleOnDragLeave}
        onDragEnd={handleOnDragEnd}
        onDrop={handleOnFileDrop}
      >
        <label htmlFor="file" className={styles.label}>Click to upload or drag and drop</label>
        <input id="file" type="file" className={styles.hidden} onChange={handleOnFileChanged} />
      </div>
    </div>
  }

  function FilePreview() {
    return (
      <div className={styles.container}>
        <div className="flex flex-col items-center">
          <object
            className="rounded-md w-full max-w-xs h-72"
            data={file}
            type="image/png" //need to be updated based on type of file
          />
          <div>
            <button
              className={styles.upload_btn}
              onClick={upload}
            >
              Upload
            </button>
            <button
              onClick={() => setFile("")}
              className={styles.reset_btn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      { file ? <FilePreview /> : <FileInput /> }
    </div>
  )
}

export default FileUpload