import React from "react";

export function extractListItems(children) {
  if (!children) return [];

  const onlyChild = React.Children.only(children);
  const allRows = React.Children.toArray(onlyChild.props.children);
  const liRows = allRows.filter(item => {
    const name = item.type?.name;
    return name === 'MDXLi' || name === 'li';
  });

  return liRows;
}
