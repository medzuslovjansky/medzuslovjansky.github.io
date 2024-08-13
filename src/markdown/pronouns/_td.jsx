export function Cell(props) {
  const { children = '—' } = props;
  return <td {...props} lang="isv">{children}</td>
}
