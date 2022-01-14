import React from "react";
import clsx from "clsx";
import noop from 'lodash/noop';

export function buildWrapper({
  displayName,
  className: defaultClassName,
  childBefore = noop,
  childAfter = noop,
}) {
  const Wrapper = ({ className, children, ...other }) => {
    const newChildren = React.Children.toArray(children);
    const before = childBefore();
    if (before) {
      newChildren.unshift(before);
    }
    const after = childBefore();
    if (after) {
      newChildren.push(after);
    }

    return React.createElement('div', {
      ...other,
      className: clsx(defaultClassName, className),
    }, ...newChildren);
  };

  Wrapper.displayName = displayName;
  return Wrapper;
}
