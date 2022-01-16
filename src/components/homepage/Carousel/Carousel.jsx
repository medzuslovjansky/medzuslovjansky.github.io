import React, {useState} from "react";
import clsx from "clsx";
import styles from "./Carousel.module.css";

export const Carousel = ({ children, interval = 10000 }) => {
  const size = React.Children.count(children);
  const [index, setIndex] = useState(0);

  // const [handle, setHandle] = useState(null);
  // const [playing, setPlaying] = useState(true);
  //
  // useEffect(() => {
  //   clearTimeout(handle);
  //   if (playing) {
  //     setHandle(setTimeout(() => {
  //       setIndex(index + 1 % size);
  //     }, interval));
  //   } else {
  //     setHandle(null);
  //   }
  //
  // }, [playing, index]);

  return (
    <div className={clsx(styles.root)}>
      {React.Children.toArray(children)[index]}
    </div>
  )
};

export default Carousel;
