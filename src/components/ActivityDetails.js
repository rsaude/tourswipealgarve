import React, { useState } from 'react';
import styles from './ActivityDetails.module.css';

function ActivityDetails({ activity, onClose }) {
  const [expandedSection, setExpandedSection] = useState('overview');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderSection = (title, content) => (
    <div className={styles.section}>
      <h3 onClick={() => toggleSection(title)} className={styles.sectionTitle}>
        {title} {expandedSection === title ? '▲' : '▼'}
      </h3>
      {expandedSection === title && <div className={styles.sectionContent}>{content}</div>}
    </div>
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>×</button>
        <h2 className={styles.title}>{activity.title}</h2>
        
        {renderSection('Overview', (
          <>
            <p>Duration: {activity.duration}</p>
            <p>Cancellations: {activity.cancellationPolicy}</p>
            <p>Meeting point: {activity.meetingPoint}</p>
          </>
        ))}
        
        {renderSection('Activity details', <p>{activity.details}</p>)}
        
        {renderSection("What's included", (
          <ul>
            {activity.included.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ))}
        
        {renderSection("What's not included", (
          <ul>
            {activity.notIncluded.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ))}
        
        {renderSection('Highlights', (
          <ul>
            {activity.highlights.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ))}
        
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
        ))}
        
        {renderSection('Cancellations', <p>{activity.cancellationDetails}</p>)}
      </div>
    </div>
  );
}

export default ActivityDetails;