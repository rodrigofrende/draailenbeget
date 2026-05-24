import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  name: string;
  text: string;
  rating: number;
};

type Props = {
  reviews: Review[];
  googleReviewsUrl: string;
};

export default function ReviewCarousel({ reviews, googleReviewsUrl }: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const review = reviews[index];

  const goToPrevious = () => {
    setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const goToNext = () => {
    setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (isPaused || reviews.length < 2) return;

    const interval = window.setInterval(goToNext, 5600);
    return () => window.clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <div
      className="reviews-widget"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="rating-mark" aria-label="Calificación promedio 5 estrellas">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} size={18} fill="currentColor" />
        ))}
      </div>
      <blockquote>"{review.text}"</blockquote>
      <p>{review.name}</p>
      <div className="reviews-actions">
        <button aria-label="Reseña anterior" className="icon-button" onClick={goToPrevious} type="button">
          <ChevronLeft size={20} />
        </button>
        <a href={googleReviewsUrl} rel="noreferrer" target="_blank">
          Ver reseñas en Google
        </a>
        <button aria-label="Reseña siguiente" className="icon-button" onClick={goToNext} type="button">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="review-dots" aria-hidden="true">
        {reviews.map((item, itemIndex) => (
          <span className={itemIndex === index ? "is-active" : ""} key={item.name} />
        ))}
      </div>
    </div>
  );
}
