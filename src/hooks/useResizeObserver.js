import { useEffect, useRef, useState } from "react";

export const useResizeObserver = () => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: Number.NaN,
    height: Number.NaN,
    scrollWidth: Number.NaN,
    scrollHeight: Number.NaN,
  });

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const { scrollWidth, scrollHeight } = entry.target;
        setDimensions({ width, height, scrollWidth, scrollHeight });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, dimensions];
};
