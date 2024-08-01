import React from 'react';
import styles from './ActivityCard.module.css';

function ActivityCard({ activity, onKnowMore }) {
  return (
    <div className={styles.card}>
      <div className={styles.videoContainer}>
        <video src={activity.videoUrl} loop autoPlay muted playsInline className={styles.video} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{activity.title}</h2>
        <button onClick={onKnowMore} className={styles.button}>Know More</button>
      </div>
    </div>
  );
}

export default ActivityCard;