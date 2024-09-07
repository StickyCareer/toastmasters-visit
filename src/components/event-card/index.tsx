import React from 'react';
import styles from './styles.module.scss'

interface EventCardProps {
  event: any
}

const EventCard = ({event}: EventCardProps) => {
  return (
    <div className={styles.container}>{event.name}</div>
  )
}

export default EventCard