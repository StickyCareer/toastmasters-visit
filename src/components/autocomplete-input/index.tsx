"use client";

import React from 'react';
import styles from './styles.module.scss'
import { findLocations } from '@/services/location.service';

interface AutocompleteInputProps {
  select: Function
}

const AutocompleteInput = ({select}: AutocompleteInputProps) => {
  const [inputValue, setInputValue] = React.useState("")
  const [debouncedInputValue, setDebouncedInputValue] = React.useState("");
  const [locations, setLocations] = React.useState<any[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
 }

  React.useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 500]);

  React.useEffect(() => {
    if (debouncedInputValue && debouncedInputValue.length >= 3) {
      findLocations({ q: debouncedInputValue })
      .then((response) => {
        setLocations(response.data.filter((location: any) => !!location.name));
      });
    }
  }, [debouncedInputValue]);

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
      {
        locations && locations.length > 0 &&
        <div className={styles.list}>
          {
            locations.map((location, index) => (
              <div key={index} className={styles.item} onClick={() => select(location)}>
                <div className={styles.name}>{location.name}</div>
                <div className={styles.address}>{location.address}</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default AutocompleteInput