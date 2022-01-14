import React, {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './Carousel.module.css';
import {buildWrapper} from "../utils/buildWrapper";

export const Slide = buildWrapper({
  displayName: 'Carousel.Slide',
  className: styles.slide,
});

export const Carousel = ({ children, interval = 10000 }) => {
  const size = React.Children.count(children);
  const [index, setIndex] = useState(0);

  // const [handle, setHandle] = useState(null);
  // const [playing, setPlaying] = useState(true);
  //
  // useEffect(() => {
  //   if (playing) {
  //     setHandle(setTimeout(() => {
  //       setIndex(index + 1 % size);
  //     }, interval));
  //   } else {
  //     clearTimeout(handle);
  //     setHandle(null);
  //   }
  //
  // }, [playing, index]);

  return (
    <section className={clsx('hero', styles.section)}>
      {React.Children.toArray(children)[index]}
    </section>
  )
};

Carousel.Slide = Slide;

export default Carousel;
