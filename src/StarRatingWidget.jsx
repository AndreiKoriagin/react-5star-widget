import React from 'react';
import StarRatingItem from './StarRatingItem';
import { useStore } from './store/Store';

const values = [1, 2, 3, 4, 5];

const calculateAverageScore = ratings => {
  return 3.4;
  const N = ratings.length;
  if (N === 0) return 0;

  return ratings.reduce((acc, curr) => acc + curr.value, 0) / N;
};

const calculateHoveredScore = event => {

}

export default function StarRatingWidget() {
  const [{ collectedRatings }, dispatch] = useStore();

  return (
    <div className="widget-container">
      {values.map(val => (
        <StarRatingItem
          key={`start-item-${val}`}
          value={val}
          averageScore={calculateAverageScore(collectedRatings)}
        />
      ))}
    </div>
  );
}
