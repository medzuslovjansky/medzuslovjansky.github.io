import React from "react";
import clsx from "clsx";
import styles from "./Slide.module.css";

export function Slide({title, subtitle, cta, image}) {
  return (
    <div className={clsx('hero', styles.root)}>
      <img src={image} alt="" className={clsx(styles.image)} />
      <div className={clsx(styles.content)}>
        <h1 className={clsx('hero__heading', styles.title)}>{title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{subtitle}</p>
        {React.cloneElement(cta, {
          className: clsx('button', 'button--lg', 'button--primary', styles.cta, cta.props.className)
        })}
      </div>
    </div>
  )
}
export default Slide;
