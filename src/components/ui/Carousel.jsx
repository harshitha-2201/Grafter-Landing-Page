import { useEffect, useState } from "react";
import useCarousel from "../../hooks/useCarousel";

const Carousel = ({ items }) => {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 768) setItemsPerView(1);
      else if (window.innerWidth <= 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { index, next, prev, isStart, isEnd } = useCarousel(
    items.length,
    itemsPerView,
  );

  return (
    <div className="carousel">
      {/* LEFT */}
      <button onClick={prev} disabled={isStart} className="arrow left">
        ‹
      </button>

      {/* VIEWPORT */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              className="carousel-item"
              key={i}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <button onClick={next} disabled={isEnd} className="arrow right">
        ›
      </button>
    </div>
  );
};

export default Carousel;
