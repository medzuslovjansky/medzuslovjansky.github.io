import React, {useState} from "react";
import clsx from "clsx";
import styles from "./Carousel.module.css";

// Autoplay is driven by the active dot's progress-ring CSS animation: when it ends, the next slide shows.
// Pausing (hover, keyboard focus) and prefers-reduced-motion are handled in CSS.
export const Carousel = ({ children, interval = 10000 }) => {
  const slides = React.Children.toArray(children);
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.root} aria-roledescription="carousel">
      <div className={styles.track}>
        {slides.map((slide, i) => (
          <div key={i} className={clsx(styles.slide, i === index && styles.active)}>
            {slide}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={clsx(styles.dot, i === index && styles.dotActive)}
              aria-label={`${i + 1} / ${slides.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle className={styles.center} cx="12" cy="12" r="5" />
                {i === index && <circle className={styles.ringTrack} cx="12" cy="12" r="10" />}
                {i === index && (
                  <circle
                    className={styles.ring}
                    cx="12" cy="12" r="10" pathLength="1"
                    style={{animationDuration: `${interval}ms`}}
                    onAnimationEnd={() => setIndex((i + 1) % slides.length)}
                  />
                )}
              </svg>
            </button>
          ))}
        </div>
      )}
    </section>
  )
};

export default Carousel;
