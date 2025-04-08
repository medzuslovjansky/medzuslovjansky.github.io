import { TransliteratorElement } from "@site/src/components";

export function Cell(props) {
  const { children = '—' } = props;
  return <td {...props} lang="isv"><TransliteratorElement>{children}</TransliteratorElement></td>
}
