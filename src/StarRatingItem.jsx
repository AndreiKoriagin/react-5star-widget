import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRatingItem({ value, averageScore }) {
  const shouldRenderFilled = averageScore > value;
  const fillingPercent =
    averageScore - value > 1 ? 100 : Math.round((averageScore - value) * 100);

  console.log(shouldRenderFilled);
  console.log(fillingPercent);
  console.log('----');

  return (
    <div className="star-container">
      <FontAwesomeIcon className="star-icon empty" icon={faStar} />
      {shouldRenderFilled && (
        <React.Fragment>
          <FontAwesomeIcon className="star-icon fill" icon={filledStar} />
          <div
            className="cover"
            style={{ width: `${100 - fillingPercent}%` }}
          />
        </React.Fragment>
      )}
    </div>
  );
}
