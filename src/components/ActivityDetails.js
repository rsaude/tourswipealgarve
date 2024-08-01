import React from 'react';
import styles from './ActivityDetails.module.css';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaList, FaCheckCircle, FaTimesCircle, FaStar, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

function ActivityDetails({ activity, onClose }) {
  return (
    <div className={styles.detailsPage}>
      <header className={styles.header}>
        <button onClick={onClose} className={styles.backButton}>
          <FaArrowLeft /> Back
        </button>
        <h1 className={styles.title}>{activity.title}</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <p className={styles.price}>From ${activity.price}</p>
          <p className={styles.location}>{activity.location}</p>
        </div>
        <button className={styles.bookNowButton}>Book Now</button>
        
        <div className={styles.overview}>
          <div className={styles.overviewItem}>
            <FaClock className={styles.icon} />
            <div>
              <h4>Duration</h4>
              <p>{activity.duration}</p>
            </div>
          </div>
          <div className={styles.overviewItem}>
            <FaCalendarAlt className={styles.icon} />
            <div>
              <h4>Cancellations</h4>
              <p>{activity.cancellationPolicy}</p>
            </div>
          </div>
          <div className={styles.overviewItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h4>Meeting point</h4>
              <p>{activity.meetingPoint}</p>
            </div>
          </div>
        </div>
        
        <p className={styles.description}>{activity.description}</p>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}><FaList /> What's included</h3>
          <ul className={styles.includesList}>
            {activity.included.map((item, index) => <li key={index}><FaCheckCircle className={styles.includeIcon} /> {item}</li>)}
          </ul>
        </section>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}><FaList /> What's not included</h3>
          <ul className={styles.includesList}>
            {activity.notIncluded.map((item, index) => <li key={index}><FaTimesCircle className={styles.excludeIcon} /> {item}</li>)}
          </ul>
        </section>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}><FaStar /> Highlights</h3>
          <ul className={styles.highlightsList}>
            {activity.highlights.map((item, index) => <li key={index}><FaStar className={styles.highlightIcon} /> {item}</li>)}
          </ul>
        </section>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}><FaInfoCircle /> Additional information</h3>
          <h4>Check-in details</h4>
          <p>{activity.checkInDetails}</p>
          <h4>What to bring</h4>
          <ul>
            {activity.whatToBring.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h4>Special requirements</h4>
          <ul>
            {activity.specialRequirements.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h4>Restrictions</h4>
          <ul>
            {activity.restrictions.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </section>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}><FaExclamationTriangle /> Cancellations</h3>
          <p>{activity.cancellationDetails}</p>
        </section>
      </div>
    </div>
  );
}

export default ActivityDetails;