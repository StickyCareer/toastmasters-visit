"use client";

import React from 'react'
import styles from './styles.module.scss'
import AutocompleteInput from '@/components/autocomplete-input'

const NewEventPage = () => {

  function onSelectLocation(location: any) {
    console.log(location)
  }

  return (
    <div>
      <AutocompleteInput select={onSelectLocation} />
    </div>
  )
}

export default NewEventPage