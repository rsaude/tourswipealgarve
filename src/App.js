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
    location: 'Vieques, Puerto Rico',
    description: 'Experience the magic of the brightest bioluminescent bay in the world...',
    price: 70,
    rating: 4.5,
    fareHarborItemId: '331340',
    duration: '1.5 hours',
    cancellationPolicy: 'To receive a full refund, a 24 hour advance notice for cancellations is required',
    meetingPoint: '61A Cll Orquideas, Vieques, 00765, Puerto Rico',
    details: 'Experience the magic of the brightest bioluminescent bay in the world, right here in Vieques...',
    included: [
      'Local guide',
      'Clear bottom kayaks',
      'Pick-up and drop-off from Lazy Jacks Restaurant in Esperanza'
    ],
    notIncluded: [
      'Food and drinks'
    ],
    highlights: [
      'Witness the brightest bioluminescent bay in the world',
      'Kayak in clear bottom kayaks with a local guide',
      '45 minutes - 1 hour kayaking in Mosquito Bay'
    ],
    checkInDetails: 'Arrive 15 minutes prior to the start time to check in.',
    whatToBring: [
      'Swimsuit or comfortable clothing',
      'Sandals or flip flops (we will go barefoot in the bay)'
    ],
    specialRequirements: [
      'Vieques is a separate island from the main island of Puerto Rico, a ferry is necessary to reach the island. Please plan accordingly.',
      'We recommend staying at least one night on the island because there may not be any transportation back to the main island of Puerto Rico after the tour is over.'
    ],
    restrictions: [
      'No mosquito repellent with deet',
      'No drinking or smoking during the tour',
      'Weight restriction of 240 lbs per person on a kayak',
      'If you are booking with a child, please call for more information'
    ],
    cancellationDetails: 'We are a separate island from the main island of Puerto Rico! Don\'t make a reservation with us if you don\'t plan on coming to Vieques!...'
  },
  {
    id: 2,
    title: 'Mountain Hiking',
    videoUrl: 'https://youtu.be/7BxIGdVkqFw',
    location: 'Vieques, Puerto Rico',
    description: 'Experience the magic of the brightest bioluminescent bay in the world...',
    price: 70,
    rating: 4.5,
    fareHarborItemId: '331340',
    duration: '1.5 hours',
    cancellationPolicy: 'To receive a full refund, a 24 hour advance notice for cancellations is required',
    meetingPoint: '61A Cll Orquideas, Vieques, 00765, Puerto Rico',
    details: 'Experience the magic of the brightest bioluminescent bay in the world, right here in Vieques...',
    included: [
      'Local guide',
      'Clear bottom kayaks',
      'Pick-up and drop-off from Lazy Jacks Restaurant in Esperanza'
    ],
    notIncluded: [
      'Food and drinks'
    ],
    highlights: [
      'Witness the brightest bioluminescent bay in the world',
      'Kayak in clear bottom kayaks with a local guide',
      '45 minutes - 1 hour kayaking in Mosquito Bay'
    ],
    checkInDetails: 'Arrive 15 minutes prior to the start time to check in.',
    whatToBring: [
      'Swimsuit or comfortable clothing',
      'Sandals or flip flops (we will go barefoot in the bay)'
    ],
    specialRequirements: [
      'Vieques is a separate island from the main island of Puerto Rico, a ferry is necessary to reach the island. Please plan accordingly.',
      'We recommend staying at least one night on the island because there may not be any transportation back to the main island of Puerto Rico after the tour is over.'
    ],
    restrictions: [
      'No mosquito repellent with deet',
      'No drinking or smoking during the tour',
      'Weight restriction of 240 lbs per person on a kayak',
      'If you are booking with a child, please call for more information'
    ],
    cancellationDetails: 'We are a separate island from the main island of Puerto Rico! Don\'t make a reservation with us if you don\'t plan on coming to Vieques!...'
  },
  {
    id: 3,
    title: 'City Food Tour',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-serving-restaurant-dishes-to-customers-855-large.mp4',
    location: 'Vieques, Puerto Rico',
    description: 'Experience the magic of the brightest bioluminescent bay in the world...',
    price: 70,
    rating: 4.5,
    fareHarborItemId: '331340',
    duration: '1.5 hours',
    cancellationPolicy: 'To receive a full refund, a 24 hour advance notice for cancellations is required',
    meetingPoint: '61A Cll Orquideas, Vieques, 00765, Puerto Rico',
    details: 'Experience the magic of the brightest bioluminescent bay in the world, right here in Vieques...',
    included: [
      'Local guide',
      'Clear bottom kayaks',
      'Pick-up and drop-off from Lazy Jacks Restaurant in Esperanza'
    ],
    notIncluded: [
      'Food and drinks'
    ],
    highlights: [
      'Witness the brightest bioluminescent bay in the world',
      'Kayak in clear bottom kayaks with a local guide',
      '45 minutes - 1 hour kayaking in Mosquito Bay'
    ],
    checkInDetails: 'Arrive 15 minutes prior to the start time to check in.',
    whatToBring: [
      'Swimsuit or comfortable clothing',
      'Sandals or flip flops (we will go barefoot in the bay)'
    ],
    specialRequirements: [
      'Vieques is a separate island from the main island of Puerto Rico, a ferry is necessary to reach the island. Please plan accordingly.',
      'We recommend staying at least one night on the island because there may not be any transportation back to the main island of Puerto Rico after the tour is over.'
    ],
    restrictions: [
      'No mosquito repellent with deet',
      'No drinking or smoking during the tour',
      'Weight restriction of 240 lbs per person on a kayak',
      'If you are booking with a child, please call for more information'
    ],
    cancellationDetails: 'We are a separate island from the main island of Puerto Rico! Don\'t make a reservation with us if you don\'t plan on coming to Vieques!...'
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

  if (showDetails) {
    return (
      <ActivityDetails
        activity={activities[currentIndex]}
        onClose={() => setShowDetails(false)}
      />
    );
  }

  return (
    <div className={styles.app}>
      <div {...handlers} className={styles.activityContainer}>
        <ActivityCard
          activity={activities[currentIndex]}
          onKnowMore={() => setShowDetails(true)}
        />
      </div>
    </div>
  );
}

export default App;