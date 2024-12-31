import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5; // Total number of stars
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 !== 0 ? 1 : 0; // Check for half-star
  const emptyStars = totalStars - fullStars - halfStars; // Remaining empty stars

  return (
    <div className="flex">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      
      {/* Half star */}
      {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default StarRating;
