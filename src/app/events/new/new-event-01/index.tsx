"use client";

import React from 'react';
import AutocompleteInput from '@/components/autocomplete-input';
import styles from './styles.module.scss';
import AppButton from '@/components/app-button';

interface NewEventStep01Props {}

const NewEventStep01 = ({}: NewEventStep01Props) => {

  function onSelectLocation(location: any) {
    console.log(location)
  }

  return (
    <div className={styles.container}>
      <AutocompleteInput select={onSelectLocation} />
    </div>
  )
}

export default NewEventStep01