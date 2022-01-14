import styles from "./Divider.module.css";
import React from "react";
import DividerPattern from "../../../static/img/home/divider.svg";

export default function Divider() {
  return (
    <div className={styles.root}>
      <DividerPattern key={0} />
      <DividerPattern key={1} />
      <DividerPattern key={2} />
    </div>
  );
}
