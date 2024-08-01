import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import ActivityCard from './components/ActivityCard';
import ActivityDetails from './components/ActivityDetails';
import styles from './App.module.css';

const mockActivities = [
  {
    id: 1,
    title: 'Sunset Kayaking',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-on-a-boat-4640-large.mp4',
    location: 'Miami Beach, FL',
    description: 'Experience the beauty of Miami Beach at sunset while kayaking.',
    price: 50,
    fareHarborItemId: '331340',
  },
  {
    id: 2,
    title: 'Mountain Hiking',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-forest-on-a-sunny-afternoon-41465-large.mp4',
    location: 'Rocky Mountains, CO',
    description: 'Explore the breathtaking views of the Rocky Mountains on this guided hike.',
    price: 75,
    fareHarborItemId: '331341', // Replace with actual ID
  },
  {
    id: 3,
    title: 'City Food Tour',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-serving-restaurant-dishes-to-customers-855-large.mp4',
    location: 'New York City, NY',
    description: 'Taste the best of NYC in this guided culinary adventure.',
    price: 100,
    fareHarborItemId: '331342', // Replace with actual ID
  },
];

function App() {
  const [activities, setActivities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setActivities(mockActivities);
  }, []);

  const handleSwipe = useCallback((direction) => {
    if (direction === 'left' && currentIndex < activities.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex, activities.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  if (activities.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <div {...handlers} className={styles.activityContainer}>
        <ActivityCard
          activity={activities[currentIndex]}
          onKnowMore={() => setShowDetails(true)}
        />
      </div>
      {showDetails && (
        <ActivityDetails
          activity={activities[currentIndex]}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}

export default App;