import React from "react";

export function extractListItems(children) {
  if (!children) return [];

  const onlyChild = React.Children.only(children);
  const allRows = React.Children.toArray(onlyChild.props.children);
  const liRows = allRows.filter(item => item.type?.name === 'MDXLi');

  return liRows;
}
