import React, { useState } from 'react';
import styles from './ActivityDetails.module.css';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaList, FaCheckCircle, FaTimesCircle, FaStar, FaExclamationTriangle } from 'react-icons/fa';

function ActivityDetails({ activity, onClose }) {
  const [expandedSection, setExpandedSection] = useState('overview');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderSection = (title, content, icon) => (
    <div className={styles.section}>
      <h3 onClick={() => toggleSection(title)} className={styles.sectionTitle}>
        {icon} {title} {expandedSection === title ? '▲' : '▼'}
      </h3>
      {expandedSection === title && <div className={styles.sectionContent}>{content}</div>}
    </div>
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>×</button>
        <h2 className={styles.title}>{activity.title}</h2>
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
        
        {renderSection("What's included", (
          <ul className={styles.includesList}>
            {activity.included.map((item, index) => <li key={index}><FaCheckCircle className={styles.includeIcon} /> {item}</li>)}
          </ul>
        ), <FaList />)}
        
        {renderSection("What's not included", (
          <ul className={styles.includesList}>
            {activity.notIncluded.map((item, index) => <li key={index}><FaTimesCircle className={styles.excludeIcon} /> {item}</li>)}
          </ul>
        ), <FaList />)}
        
        {renderSection('Highlights', (
          <ul className={styles.highlightsList}>
            {activity.highlights.map((item, index) => <li key={index}><FaStar className={styles.highlightIcon} /> {item}</li>)}
          </ul>
        ), <FaStar />)}
        
        {renderSection('Additional information', (
          <>
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
          </>
        ), <FaInfoCircle />)}
        
        {renderSection('Cancellations', <p>{activity.cancellationDetails}</p>, <FaExclamationTriangle />)}
      </div>
    </div>
  );
}

export default ActivityDetails;