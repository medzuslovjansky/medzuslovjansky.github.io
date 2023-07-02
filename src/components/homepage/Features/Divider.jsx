import React from "react";
import styles from "./Divider.module.css";

function times(count, fn) {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(fn(i));
  }

  return result;
}

export default function Divider() {
  const renderPattern = (i) => (
    <img key={i}
         alt=""
         src={require('!!url-loader!../../../../static/img/home/divider.svg').default}
    />
  );

  return (
    <div className={styles.root}>
      {times(3, renderPattern)}
    </div>
  );
}
