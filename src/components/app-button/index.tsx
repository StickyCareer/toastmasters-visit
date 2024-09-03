import React from 'react';
import styles from './styles.module.scss'
import IconFavorite from '/public/favorite_border.svg';

const AppButton = () => {
  return (
    <div className={styles.container}>
      <IconFavorite />
      AppButton
    </div>
  )
}

export default AppButton