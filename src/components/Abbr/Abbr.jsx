import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TooltipBase } from '../Tooltip/TooltipBase';
import dictionary from '@site/src/remark/abbr-i18n';

/**
 * Abbreviation component with tooltip.
 *
 * Progressive enhancement:
 * - SSR/No-JS: <abbr title="..."> with native browser tooltip
 * - With JS: Portal tooltip (escapes overflow:hidden), title attr removed
 *
 * @example
 * <Abbr>m.</Abbr>  // Looks up "m." in dictionary
 * <Abbr title="custom explanation">xyz</Abbr>  // Custom tooltip
 */
export function Abbr({ children, title, ...props }) {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale;
  const key = children;
  const translation = dictionary[key];
  const [short, long] = translation ? translation[lang] : [key, title];

  // If no tooltip content, just render plain abbr
  if (!long) {
    return <abbr {...props}>{short}</abbr>;
  }

  // title attr for SSR/no-JS fallback (TooltipBase removes it on mount)
  return (
    <TooltipBase
      content={long}
      as="abbr"
      triggerProps={{ title: long, ...props }}
    >
      {short}
    </TooltipBase>
  );
}
