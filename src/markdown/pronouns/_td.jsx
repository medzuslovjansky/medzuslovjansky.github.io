export function Cell(props) {
  const { children = '—' } = props;
  return <td {...props} lang="art-x-interslv">{children}</td>
}
