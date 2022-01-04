import {createElement, JSXElementConstructor} from 'react';

export default function renderThis<P, C extends JSXElementConstructor<P>>(this: C, props: P, index: number) {
  return createElement(this, { key: index, ...props })
}
