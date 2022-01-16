import React from "react";
import clsx from "clsx";
import styles from "./Features.module.css";
import Divider from "./Divider";

export function Features({ className, children, primaryAction, secondaryAction }) {
  return (
    <section className={clsx(styles.root, className)}>
      <div className="row">
        {React.Children.map(children, c => {
          return React.cloneElement(c, {
            className: clsx('col', 'col--4', c.props.className),
          });
        })}
      </div>
      <div className={clsx("row")}>
        <div className={clsx("col", styles.actions)}>
          {React.cloneElement(primaryAction, {
            className: clsx('button', 'button--primary', 'button--lg', styles.primaryAction, primaryAction.props.className),
          })}
          {React.cloneElement(secondaryAction, {
            className: clsx(styles.secondaryAction, secondaryAction.props.className),
          })}
        </div>
      </div>
      <Divider />
    </section>
  );
}

export default Features;
