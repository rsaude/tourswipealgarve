import React from 'react';
import styles from './ActivityDetails.module.css';
import FareHarborCalendar from './FareHarborCalendar';

function ActivityDetails({ activity, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{activity.title}</h2>
        <p className={styles.info}>Location: {activity.location}</p>
        <p className={styles.info}>Description: {activity.description}</p>
        <p className={styles.info}>Price: ${activity.price}</p>
        <div className={styles.calendarContainer}>
          <FareHarborCalendar itemId={activity.fareHarborItemId} />
        </div>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}

export default ActivityDetails;