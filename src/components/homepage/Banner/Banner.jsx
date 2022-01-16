import React from "react";
import clsx from "clsx";

import Divider from "./Divider";
import styles from "./Banner.module.css";

export default function Banner({
 image,
 title,
 description,
 cta,
}) {
  return (
    <section className={clsx(styles.root)}>
      <div className="row">
        <div className={clsx("container", "col", "col--6", styles.content)}>
          <h2 className={clsx("hero__heading", styles.title)}>{title}</h2>
          <p className={clsx("hero__subtitle", styles.description)}>{description}</p>
          {React.cloneElement(cta, { className: clsx(styles.cta, cta.props.className) })}
        </div>
        <img className={clsx("col", "col--6", styles.image)} src={image} alt="" />
      </div>
      <Divider />
    </section>
  );
}
