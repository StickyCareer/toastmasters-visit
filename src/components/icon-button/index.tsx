import React from 'react';
import styles from './styles.module.scss'

interface AppButtonProps {
  icon: any
}

const IconButton = ({icon}: AppButtonProps) => {
  return (
    <div className={styles.container}>
      {icon}
    </div>
  )
}

export default IconButton;