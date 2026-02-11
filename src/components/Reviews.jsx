import { useEffect, useState } from "react";

const API_URL = "YOUR_REVIEWS_API_URL";

const CACHE_KEY = "reviewsData";
const CACHE_TIME_KEY = "reviewsData_time";
const CACHE_DURATION = 10 * 60 * 1000;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && cachedTime) {
      const isExpired = Date.now() - Number(cachedTime) > CACHE_DURATION;
      if (!isExpired) {
        setReviews(JSON.parse(cached));
        setLoading(false);
        return;
      }
    }

    fetch(API_URL)
      .then(res => res.text())
      .then(txt => {
        const json = JSON.parse(txt);
        const active = json.filter(
          r => r.active?.toLowerCase() === "yes"
        );

        setReviews(active);
        localStorage.setItem(CACHE_KEY, JSON.stringify(active));
        localStorage.setItem(CACHE_TIME_KEY, Date.now());
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-5">
    <div className="spinner-border"></div>
  </div>;

  return (
    <div className="container py-5">
      {reviews.map((r, i) => (
        <div key={i} className="mb-3">
          <p>“{r.text}”</p>
          <strong>{r.name}</strong>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
