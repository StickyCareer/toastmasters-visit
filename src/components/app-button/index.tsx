import React from 'react';
import styles from './styles.module.scss'

interface AppButtonProps {
  icon: any
}

const AppButton = ({icon}: AppButtonProps) => {
  return (
    <div className={styles.container}>
      {icon}
      AppButton
    </div>
  )
}

export default AppButton