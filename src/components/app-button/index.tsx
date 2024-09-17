import React from 'react';
import styles from './styles.module.scss'

interface AppButtonProps {
  icon: any,
  onclick: Function
}

const AppButton = ({icon, onclick}: AppButtonProps) => {
  return (
    <button className={styles.container} onClick={() =>  onclick()}>
      {icon}
      AppButton
    </button>
  )
}

export default AppButton