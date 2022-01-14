import styles from "./Divider.module.css";
import React from "react";
import DividerPattern1 from "../../../static/img/home/divider2.svg";
import DividerPattern2 from "../../../static/img/home/divider3.svg";

function renderPattern(idx) {
  return (
    idx % 2 === 0
      ? <DividerPattern1 key={idx} />
      : <DividerPattern2 key={idx} />
  )
}

export default function Divider() {
  return (
    <div className={styles.root}>
      {[1,2,3,4,5,6,7,8,9].map(renderPattern)}
    </div>
  );
}
