import styles from "./Banner.module.css";
import React from "react";
import {buildWrapper} from "../utils/buildWrapper";
import Divider from "./Divider";

export const Banner = buildWrapper({
  displayName: 'Banner',
  className: styles.root,
  childAfter: () => <Divider />,
});

export default Banner;
