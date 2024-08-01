import React from 'react';
import styles from './ActivityCard.module.css';

function ActivityCard({ activity, onKnowMore }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className={styles.star}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className={styles.star}>½</span>);
      } else {
        stars.push(<span key={i} className={styles.star}>☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      <div className={styles.videoContainer}>
        <video src={activity.videoUrl} loop autoPlay muted playsInline className={styles.video} />
      </div>
      <div className={styles.content}>
  <div className={styles.mainInfo}>
    <h2 className={styles.title}>{activity.title}</h2>
    <p className={styles.location}>{activity.location}</p>
    <div className={styles.rating}>{renderStars(activity.rating)}</div>
    <button onClick={onKnowMore} className={styles.button}>Learn More</button>
    <p>From {activity.price} €</p>
  </div>
</div>
      <div className={styles.swipeIndicator}>
        <span className={styles.arrow}>←</span>
        <span>Swipe</span>
        <span className={styles.arrow}>→</span>
      </div>
    </div>
  );
}

export default ActivityCard;