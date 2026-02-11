import { useEffect, useState } from "react";

const API_URL = "YOUR_INSTAGRAM_API_URL";

const CACHE_KEY = "instagramReels";
const CACHE_TIME_KEY = "instagramReels_time";
const CACHE_DURATION = 10 * 60 * 1000;

const InstagramPreview = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && cachedTime) {
      const isExpired = Date.now() - Number(cachedTime) > CACHE_DURATION;
      if (!isExpired) {
        setReels(JSON.parse(cached));
        setLoading(false);
        return;
      }
    }

    fetch(API_URL)
      .then(res => res.text())
      .then(txt => {
        const json = JSON.parse(txt);
        const active = json.filter(
          item => item.active?.toLowerCase() === "yes"
        );

        setReels(active);
        localStorage.setItem(CACHE_KEY, JSON.stringify(active));
        localStorage.setItem(CACHE_TIME_KEY, Date.now());
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && reels.length > 0) {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [loading, reels]);

  if (loading) return <div className="text-center py-5">
    <div className="spinner-border"></div>
  </div>;

  return (
    <div className="container py-5">
      <div className="row">
        {reels.map((item, i) => (
          <div className="col-md-4" key={i}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={item.embed.replace("/embed", "")}
              data-instgrm-version="14"
            ></blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPreview;
