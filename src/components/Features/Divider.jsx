import React from "react";
import times from "lodash/times";
import styles from "./Divider.module.css";

export default function Divider() {
  const renderPattern = (i) => (
    <img key={i}
         alt=""
         src={require('!!url-loader!../../../static/img/home/divider.svg').default}
    />
  );

  return (
    <div className={styles.root}>
      {times(3, renderPattern)}
    </div>
  );
}
