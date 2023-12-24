/**
 * Stars Component
 *
 * A component that displays a star rating based on a given rating value.
 * It renders a row of stars, filled or empty, representing the rating.
 * It also displays the rating value and the number of customer reviews.
 */

interface StarRatingProps {
  rating: number;
}

const Stars: React.FC<StarRatingProps> = ({ rating }) => {
  const yellowStars = Math.floor(rating);
  const hasHalfStar = rating - yellowStars >= 0.5;

  return (
    <div className="flex gap-2  items-center text-[11px] font-medium leading-5">
      <div className="flex items-center gap-[2px]  text-[10px] ">
        {[...Array(yellowStars)].map((_, index) => (
          <i key={index} className="fi fi-ss-star text-[#ff8d00]"></i>
        ))}
        {hasHalfStar && <i className="fi fi-ss-star-half text-[#ff8d00]"></i>}
        {[...Array(5 - yellowStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <i key={index} className="fi fi-ss-star text-gray-300"></i>
        ))}
      </div>
      <span>{rating} Rating </span>
      <span>
        <span style={{ fontFamily: "sans-serif" }}>(</span>5 Customers reviews
        <span style={{ fontFamily: "sans-serif" }}>)</span>
      </span>
    </div>
  );
};

export default Stars;
