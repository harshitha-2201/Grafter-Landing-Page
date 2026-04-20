import { useState, useCallback } from "react";

const useCarousel = (length, itemsPerView) => {
  const [index, setIndex] = useState(0);

  const maxIndex = length - itemsPerView;

  const next = useCallback(() => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return {
    index,
    next,
    prev,
    isStart: index === 0,
    isEnd: index === maxIndex,
  };
};

export default useCarousel;