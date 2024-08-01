import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import ActivityCard from './components/ActivityCard';
import ActivityDetails from './components/ActivityDetails';
import styles from './App.module.css';

const mockActivities = [
  {
    id: 1,
    title: 'Sunset Kayaking',
    videoUrl: 'https://videos.pexels.com/video-files/4611883/4611883-uhd_2560_1440_30fps.mp44',
    location: 'Miami Beach, FL',
    description: 'Experience the beauty of Miami Beach at sunset while kayaking.',
    price: 50,
    rating: 4.5,
    fareHarborItemId: '331340',
  },
  {
    id: 2,
    title: 'Mountain Hiking',
    videoUrl: 'https://https://videos.pexels.com/video-files/15749386/15749386-uhd_1440_2560_30fps.mp4',
    location: 'Rocky Mountains, CO',
    description: 'Explore the breathtaking views of the Rocky Mountains on this guided hike.',
    price: 75,
    rating: 4.8,
    fareHarborItemId: '331341',
  },
  {
    id: 3,
    title: 'City Food Tour',
    videoUrl: 'https://videos.pexels.com/video-files/7824469/7824469-uhd_1440_2560_30fps.mp4',
    location: 'New York City, NY',
    description: 'Taste the best of NYC in this guided culinary adventure.',
    price: 100,
    rating: 4.2,
    fareHarborItemId: '331342',
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