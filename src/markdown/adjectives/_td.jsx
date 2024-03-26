import {TransliteratorElement} from "@site/src/components";

export function Cell(props) {
  const { children = '—' } = props;
  return <td {...props}><TransliteratorElement>{children}</TransliteratorElement></td>
}

export function CodeCell(props) {
  const { children = '—' } = props;
  return <td {...props}><TransliteratorElement><code>{children}</code></TransliteratorElement></td>
}
