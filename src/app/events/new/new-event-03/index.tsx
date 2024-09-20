"use client";

import React from 'react'
import FileUpload from "@/components/file-upload";
import styles from './styles.module.scss';

interface NewEventStep03Props {}

const NewEventStep03 = ({}: NewEventStep03Props) => {
  const upload = (event: any) => {
    console.log('event:', event);
  };

  return (
    <div className={styles.container}>
      <FileUpload upload={upload} />
    </div>
  )
}

export default NewEventStep03